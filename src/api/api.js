import axios from 'axios';

const api = axios.create({
    baseURL: 'https://back-concept.herokuapp.com/',
});

export default api;