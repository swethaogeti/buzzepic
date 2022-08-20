import axios from "axios";

export const deletePostCommentService = (postId, commentId, token) => {
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: token } }
  );
};
