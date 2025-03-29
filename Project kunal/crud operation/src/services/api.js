import axios from "axios";

const BASE_URL = "https://reqres.in/api";

// Login request
export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response.data;
};

// Get paginated users
export const getUsers = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/users?page=${page}`);
  return response.data;
};

// Update user
export const updateUser = async (id, userData) => {
  return await axios.put(`${BASE_URL}/users/${id}`, userData);
};

// Delete user
export const deleteUser = async (id) => {
  return await axios.delete(`${BASE_URL}/users/${id}`);
};
