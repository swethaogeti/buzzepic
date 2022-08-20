import axios from "axios";

export const upVoteCommentService = (postId, commentId, token) => {
  axios.post(
    `/api/comments/upvote/${postId}/${commentId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};
