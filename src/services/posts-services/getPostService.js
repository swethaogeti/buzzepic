import axios from "axios";

export const getPostService = (postId) => {
  axios.get(`/api/posts/${postId}`);
};
