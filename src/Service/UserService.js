import axios from "./axios";

const getAllUser = (page) => {
  return axios.get(`/employee?page=${page}&size=5`);
};

const createUser = (user) => {
  return axios.post("/employee", user);
};

const getUserById = (id) => {
  return axios.get(`/employee/${id}`);
};

export { getAllUser, createUser, getUserById };
