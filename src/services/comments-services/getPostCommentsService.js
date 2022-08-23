import axios from "axios";

export const getPostCommentsService = async (postId) => {
  const response = await axios.get(`/api/comments/${postId}`);
  return response;
};
