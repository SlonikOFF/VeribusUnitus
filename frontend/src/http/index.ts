import axios from "axios";

const $host = axios.create({
  baseURL: "http://backend:5000/",
  responseType: "blob",
});

export { $host };
