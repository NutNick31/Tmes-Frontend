import axios from "axios";
let url = "http://localhost:8600/api";

axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";