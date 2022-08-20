import axios from "axios";

export const downVoteCommentService = (postId, commentId, token) => {
  axios.post(
    `/api/comments/downvote/${postId}/${commentId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};
