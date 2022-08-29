import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api",
  // baseURL: "http://localhost:3006/",
  // baseURL: "http://3.139.109.107",
});
