import axios from "axios";

export const signupService = async (user) => {
  const response = await axios.post("api/auth/signup", user);
  return response;
};
