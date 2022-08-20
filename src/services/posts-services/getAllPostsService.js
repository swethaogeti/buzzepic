import axios from "axios";

export const getAllPostsService = () => {
  axios.get("/api/posts");
};
