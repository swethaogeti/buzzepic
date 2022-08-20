import axios from "axios";

export const getPostCommentsService = (postId) => {
  axios.get(`/api/comments/${postId}`);
};
