import axios from "axios";

export default axios.create({
  headers: {
    baseURL: "https://vet-teams.vercel.app/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  },
});
// baseURL: "http://localhost:3000/api"

// baseURL: "http://3.139.109.107",
