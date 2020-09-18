import axios from "axios";

//Async Storage
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://77a2ad1c559f.ngrok.io",
});
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
