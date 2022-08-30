import axios from "axios";

export default axios.create({
  baseURL: "https://vet-teams.vercel.app/",
  // baseURL: "http://localhost:3000/api",
  // baseURL: "http://3.139.109.107",
});
