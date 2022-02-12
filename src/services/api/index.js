import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3030/api/users/",
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default api;