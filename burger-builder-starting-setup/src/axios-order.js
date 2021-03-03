import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-daniel-7229f-default-rtdb.firebaseio.com/",
});

export default instance;
