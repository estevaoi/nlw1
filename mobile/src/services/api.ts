import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.ecoleta.org'
});

export default api;