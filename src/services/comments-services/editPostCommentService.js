import axios from "axios";

export const editPostCommentService = (
  postId,
  commentId,
  commentData,
  token
) => {
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization: token } }
  );
};
