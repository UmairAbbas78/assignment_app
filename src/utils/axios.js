import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

const token = localStorage.getItem("token");
if (token) {
  instance.defaults.headers.common["authorization"] = `Bearer ${token}`;
}

export default instance;
