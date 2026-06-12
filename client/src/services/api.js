import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-startup-validator-rb81.onrender.com/api",
});

export default api;

//locally

//import axios from "axios";

//const api = axios.create({
//  baseURL: "http://localhost:5000/api",
//});

//export default api;