import axios from "axios";
export const dislikePostService = (postId, token) => {
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};
