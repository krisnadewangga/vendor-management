import axios from "axios";
import loginAction from "./actions/auth" 

<<<<<<< HEAD
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const token = loggedInUser ? ("Bearer "+ loggedInUser.jwt) : "";

console.log(loginAction, loggedInUser, token)
=======
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
>>>>>>> origin/dev

export const api = axios.create({
  baseURL: process.env.REACT_APP_URI_API,
  headers: { "Content-type": "application/json" }
});

api.interceptors.request.use (
  config => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);
