import axios from "axios";

export const likePostService = (postId, token) => {
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};
