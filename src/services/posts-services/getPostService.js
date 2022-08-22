import axios from "axios";

export const getPostService = async (postId) => {
  const response = await axios.get(`/api/posts/${postId}`);
  return response;
};
