import axios from "axios";

export const getUserService = async (username, token) => {
  const response = await axios.get(`/api/users/${username}`, {
    headers: { authorization: token },
  });
  return response;
};
