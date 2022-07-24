import axios from "axios";

const API = axios.create({
  baseURL: process.env.BASE_URL || "https://api.github.com",
});

export default API;
