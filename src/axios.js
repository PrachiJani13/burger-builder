import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/'
     // baseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;