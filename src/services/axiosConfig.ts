import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.2:3000/', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    // Check for the `requiresAuth` flag to determine if a token should be added
    const token = 'your_token_here'; // Fetch your token from secure storage
    if (config.headers.requiresAuth && token) {
      config.headers['Authorization'] = `Bearer ${token}`;
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
