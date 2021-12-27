import axios from "axios";

export default axios.create({
  baseURL: "https://projet-estime-ton-aah-back.herokuapp.com/",
  //baseURL: "http://localhost:5000/",
  headers: {
    crossorigin: "Access-Control-Allow-Origin: *",
    "Content-Type": "application/json"
  }
});
