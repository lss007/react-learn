import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";


// Register Service
const register = (name, email, password) => {
  return axios
    .post(API_URL + "register", {
      name,
      email,
      password
    })
    .then((response) => {
      console.log();
      if (response.data.token) {

        localStorage.setItem("authToken", JSON.stringify(response.data));
      }

      return response.data;
    });
};

// Login Service
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("authToken", JSON.stringify(response.data));
      }

      return response.data;
    });
};


// Logout Service
const logout = () => {
  localStorage.removeItem("authToken");
};
export default {
  register,
  login,
  logout
};
