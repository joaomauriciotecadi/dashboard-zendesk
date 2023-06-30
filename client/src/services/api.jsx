import axios from "axios";

const api = axios.create({
    baseURL: "http://10.3.50.7:4000"
});

export default api;