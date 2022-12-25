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

const updateUser = (id, data) => {
  return axios.put(`/employee/${id}`, data);
};

const deleteUser = (id) => {
  return axios.delete(`/employee/${id}`);
};

export { getAllUser, createUser, getUserById, updateUser, deleteUser };
