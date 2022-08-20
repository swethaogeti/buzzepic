import axios from "axios";

export const createPostService = (postData, token) => {
  axios.post("/api/posts", { postData }, { headers: { authorization: token } });
};
