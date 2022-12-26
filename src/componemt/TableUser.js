import { getAllUser } from "../Service/UserService";
import { useEffect, useState } from "react";
import { Table, Pagination, Button } from "antd";
import ModalAddUser from "./ModalAddUser";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
// import queryString from "query-string";
function TableUser(props) {
  const [listUser, setListUser] = useState([]);
  const [totalUsers, setTotalUser] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [page, setPage] = useState(0);
  const pageF5 = Number(useParams().page);
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
    getUser(pageF5 + 1);
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
    getUser(+event.selected + 1);
    navigate(`/${+event.selected}`);
  };
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
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          initialPage={pageF5 ? pageF5 : 0}
          previousLabel="Previous"
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
    </>
  );
}

export default TableUser;
