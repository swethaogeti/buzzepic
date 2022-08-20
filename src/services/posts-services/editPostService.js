import axios from "axios";

export const editPostService = (postId, postData, token) => {
  axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    { headers: { authorization: token } }
  );
};
