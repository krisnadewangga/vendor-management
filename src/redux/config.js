import axios from "axios";

const getToken = () => {
  try {
    const serializedState = localStorage.getItem('loggedInUser')
    if (serializedState === null) {
      return null
    }
    return JSON.parse(serializedState).jwt
  } catch (err) {
    return null
  }
}

export const api = axios.create({
  baseURL: process.env.REACT_APP_URI_API,
  headers: { "Content-type": "application/json" }
});

api.interceptors.request.use (
  config => {
    console.log('token api', getToken());
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);
