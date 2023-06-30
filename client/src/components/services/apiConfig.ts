import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});

export default apiInstance;
