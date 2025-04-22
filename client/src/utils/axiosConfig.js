import axios from 'axios';

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:6001';

// Add request interceptor for handling auth tokens
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for handling common errors
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      // Only redirect to login page if we're not already on a login page and not in an API call
      // This prevents redirect loops and multiple login prompts
      const currentPath = window.location.pathname;
      if (!currentPath.includes('/login') && !currentPath.includes('/signup')) {
        // Store the current path for redirect after login
        localStorage.setItem('redirectAfterLogin', currentPath);
        // Don't automatically redirect - let the component handle it
      }
    }
    return Promise.reject(error);
  }
);

export default axios; 