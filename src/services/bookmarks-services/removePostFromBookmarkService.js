import axios from "axios";

export const removePostFromBookmarkService = (postId, token) => {
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};
