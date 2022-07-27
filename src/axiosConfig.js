import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.209.4.223:8080",
});

export default instance;
