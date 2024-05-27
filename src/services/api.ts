import axios from "axios";

const api = axios.create({
    baseURL: "https://serverest.dev",
});

export default api;
