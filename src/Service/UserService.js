import axios from "./axios";

const getAllUser = (page) => {
  return axios.get(`/employee?page=${page}&size=5`);
};

const createUser = (
  username,
  firstname,
  lastname,
  email,
  phone,
  address,
  birthday,
  gender
) => {
  return axios.post("/employee", {
    username,
    firstname,
    lastname,
    email,
    phone,
    address,
    birthday,
    gender,
  });
};

const getUserById = (id) => {
  return axios.get(`/employee/${id}`);
};

export { getAllUser, createUser, getUserById };
