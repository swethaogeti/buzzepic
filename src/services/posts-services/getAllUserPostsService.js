import axios from "axios";

export const getAllUserPostsService = async (username, token) => {
  const response = await axios.get(`/api/posts/user/${username}`, {
    headers: { authorization: token },
  });
  return response;
};
