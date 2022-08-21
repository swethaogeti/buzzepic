import axios from "axios";

export const getAllUserPostsService = (username, token) => {
  axios.get(`/api/posts/user/${username}`, {
    headers: { authorization: token },
  });
};
