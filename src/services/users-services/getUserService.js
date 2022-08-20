import axios from "axios";

export const getUserService = (username) => {
  axios.get(`/api/users/${username}`);
};
