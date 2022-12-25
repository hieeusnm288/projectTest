import { getAllUser } from "../Service/UserService";
import { useEffect, useState } from "react";
import { Table, Pagination, Button } from "antd";
import ModalAddUser from "./ModalAddUser";
import { history } from "../App";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  NavLink,
  HistoryRouterProps,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import UpdateUser from "./UpdateUsers";

function TableUser(props) {
  const [listUser, setListUser] = useState([]);
  const [totalUsers, setTotalUser] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const navigate = useNavigate();

  const pageUpdate = (datauser) => {
    navigate(`/student/${datauser.id}`);
  };

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
        //
        <>
          <Button
            onClick={() => {
              pageUpdate(datauser);
            }}
          >
            Sửa
          </Button>
        </>
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

  const handlePageClick = (event) => {
    // console.log("Check Event: ", event);
    getUser(+event.selected + 1);
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
        <Table columns={columns} dataSource={data} key="" pagination={false} />
      </div>
      <ModalAddUser
        show={showModalAdd}
        handleClose={handleClose}
        handleUpdateTable={handleUpdateTable}
      />
      <div className="d-flex justify-content-center mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={totalPages}
          pageCount={totalPages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
      {/* <div className="d-none">
        <UpdateUser listUser={listUser} setListUser={setListUser} />
      </div> */}
    </>
  );
}

export default TableUser;
