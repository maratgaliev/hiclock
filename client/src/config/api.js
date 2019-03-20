import axios from 'axios';
import {getValidToken} from "../api/token";

const api = axios.create({
    baseURL: process.env.REACT_APP_CONNECT_STRING,
});

axios.defaults.headers.common = []
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common = {'Authorization': `Bearer ${getValidToken()}`}

export function setHeaders(token) {
    console.log(token)
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default api