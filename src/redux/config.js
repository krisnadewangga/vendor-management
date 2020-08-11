import axios from "axios";
import loginAction from "./actions/auth" 

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const token = loggedInUser ? ("Bearer "+ loggedInUser.jwt) : "";

console.log(loginAction, loggedInUser, token)

export const api = axios.create({
  baseURL: "https://apgbe.btoz.co.id",
  headers: {
    "Content-type": "application/json",
    "Authorization": token,
  }
});