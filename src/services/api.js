import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2'
});

api.interceptors.request.use(async config => {
  try {
    const token = JSON.parse(localStorage.getItem('user')).token;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default api;
