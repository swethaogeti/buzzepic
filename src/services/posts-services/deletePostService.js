import axios from "axios";

export const deletePostService = (postId, token) => {
  axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
};
