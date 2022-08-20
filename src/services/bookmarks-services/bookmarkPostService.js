import axios from "axios";

export const bookmarkPostService = (postId, token) => {
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};
