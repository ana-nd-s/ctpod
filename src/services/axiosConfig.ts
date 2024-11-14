import axios from 'axios';
import {store} from 'store';

const api = axios.create({
  baseURL: 'http://172.16.1.21:3000/', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    // Check for the `requiresAuth` flag to determine if a token should be added
    const accessToken = store.getState().auth.accessToken
    if (config.headers.requiresAuth && accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    // Remove the `requiresAuth` flag to avoid sending it in the request
    delete config.headers.requiresAuth;
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);

export default api;
