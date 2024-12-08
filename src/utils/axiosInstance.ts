import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:9000/api", // Use Vite's environment variable
  timeout: 5000, // Optional: Set a timeout for requests
});

// Add an interceptor to include the token in headers if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor for response handling (e.g., logout on 401)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optional: Handle unauthorised access (e.g., redirect to login page)
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Redirect user to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
