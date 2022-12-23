import { getAllUser } from "../Service/UserService";
import { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import ModalAddUser from "./ModalAddUser";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import UpdateUser from "./UpdateUsers";

function TableUser(props) {
  const [listUser, setListUser] = useState([]);
  const [totalUsers, setTotalUser] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const columns = [
    {
      title: "Tên Đăng Nhập",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Họ và tên",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (datauser) => (
        <NavLink to={`/student/${datauser.id}`}>Sửa</NavLink>
      ),
    },
  ];

  const handleClose = () => {
    setShowModalAdd(false);
  };

  const handleUpdateTable = (users) => {
    setListUser([users, ...listUser]);
  };
  const data = listUser;
  // console.log(data);
  useEffect(() => {
    getUser(0);
  }, []);
  const getUser = async (page) => {
    let res = await getAllUser(page);
    if (res && res.data) {
      setTotalUser(res.total_count);
      setListUser(res.data);
      setTotalPages(res.total_page);
    }
    // console.log(data);
  };

  // const getDataUser = (datauser) => {
  //   setListUser((data) => {
  //     data.filter((user) => user.id === datauser.id);
  //   });
  // };

  return (
    <>
      <div className="d-flex justify-content-around mt-5">
        <h2>Hệ thống quản lý sinh viên</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowModalAdd(true)}
        >
          Tạo mới
        </button>
      </div>
      <div className="mt-5 container">
        <Table columns={columns} dataSource={data} key="" />
      </div>
      <ModalAddUser
        show={showModalAdd}
        handleClose={handleClose}
        handleUpdateTable={handleUpdateTable}
      />
      <div className="d-none">
        <UpdateUser listUser={listUser} setListUser={setListUser} />
      </div>
    </>
  );
}

export default TableUser;
