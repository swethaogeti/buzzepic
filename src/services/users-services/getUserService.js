import axios from "axios";

export const getUserService = (username, token) => {
  axios.get(`/api/users/${username}`, {
    headers: { authorization: token },
  });
};
