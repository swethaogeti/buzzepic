import axios from "axios";

export const getUserService = async (username) => {
  const response = await axios.get(`/api/users/${username}`);
  return response;
};
