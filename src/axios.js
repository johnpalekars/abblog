import axios from "axios";


const instance = axios.create({
  baseURL: "https://abhishekpalekar.herokuapp.com/",
});

export default instance;