import axios from "axios";

export const signupService = (user) => {
  axios.post("api/auth/signup", user);
};
