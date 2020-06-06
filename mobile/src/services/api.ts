import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.ecoleta.org'

});

export default api;