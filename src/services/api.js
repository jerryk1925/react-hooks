import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081/',
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
};