import api from "../../axiosApi/api";
import axios from "axios";

const getCookie = (name) => {
  let c = document.cookie.match(
    `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
  )[1];
  if (c) return decodeURIComponent(c);
};

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${getCookie("token")}`;
    config.headers.common["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchAll = async (path) => {
  try {
    const response = await api.get(path);
    return response.data.data;
  } catch (error) {
    console.error("An error occur during GET /users request", error.message);
  }
};

export const fetchById = async (path, id) => {
  try {
    const response = await api.get(`${path}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error.apply(error.message);
  }
};

export const createData = async (path, newData) => {
  try {
    const response = await api.post(`${path}`, newData);
    return response.data.data;
  } catch (error) {
    console.error(error, error.message);
  }
};

export const updateData = async (path, newData) => {
  try {
    const response = await api.put(`${path}/${newData.id}`, newData);
    return response.data.data;
  } catch (error) {
    console.error(error, error.message);
  }
};

export const deleteDataById = async (path, id) => {
  try {
    const response = await api.delete(`${path}/${id}`);
      return response.data.data;
  } catch (error) {
    console.log(error, error.message);
  }
};
