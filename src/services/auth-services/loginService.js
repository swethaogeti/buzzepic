import axios from "axios";
export const loginService = (user) => {
  axios.post("/api/auth/login", user);
};
