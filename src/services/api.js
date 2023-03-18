import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2'
});

api.interceptors.request.use(async config => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user !== null) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default api;
