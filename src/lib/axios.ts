import axios from 'axios';

// read from env at build/run time
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosinstance = axios.create({
  baseURL,
  withCredentials: true,    // send cookies if you’re storing JWT in cookie
});

// (Optional) intercept to attach a Bearer token stored in cookie/localStorage
axiosinstance.interceptors.request.use((config) => {
  // e.g. read from localStorage or a cookie
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('access_token')
    : null;
  if (token) {
    config.headers!['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosinstance;

