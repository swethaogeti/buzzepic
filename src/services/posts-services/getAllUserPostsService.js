import axios from "axios";

export const getAllUserPostsService = (username) => {
  axios.get(`/api/posts/user/${username}`);
};
