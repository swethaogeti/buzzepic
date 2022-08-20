import axios from "axios";

export const addPostCommentService = (postId, commentData, token) => {
  axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization: token } }
  );
};
