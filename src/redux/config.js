import axios from "axios";

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const token = loggedInUser ? ("Bearer "+ loggedInUser.jwt) : "";

console.log(loggedInUser)

export const api = axios.create({
  baseURL: "https://apgbe.btoz.co.id",
  headers: {
    "Content-type": "application/json",
    "Authorization": token,
  }
});