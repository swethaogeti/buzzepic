import axios from "axios";

export const getAllUserPostsService = async (username) => {
  const response = await axios.get(`/api/posts/user/${username}`);
  return response;
};
