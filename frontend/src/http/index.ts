import axios from "axios";

const $host = axios.create({
  baseURL: "https://api.test.profcomff.com/",
  //   responseType: "blob",
});

export { $host };
