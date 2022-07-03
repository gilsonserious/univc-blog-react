import axios from "axios";

const api = axios.create({
    baseURL: 'https://univc-api.herokuapp.com/'
})

export default api;