import axios from 'axios';

//Url da api: https://sujeitoprogramador.com/rn-api/?api=posts
//?api=posts

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/rn-api/'
});

export default api;