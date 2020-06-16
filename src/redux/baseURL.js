import axios from "axios";

export default axios.create({
  baseURL: "https://apgbe.btoz.co.id",
  headers: {
    "Content-type": "application/json"
  }
});