import axios from 'axios';

const axiosInst = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default axiosInst;
