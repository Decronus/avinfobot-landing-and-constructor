import axios from 'axios';

const axiosInst = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', Pragma: 'no-cache', Expires: '0' },
});

export default axiosInst;
