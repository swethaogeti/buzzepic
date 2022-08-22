import axios from "axios";

// export const getAllPostsService = () => {
//   axios.get("/api/posts");
// };

// const getAllPostsService = () => {
//   axios.get("/api/posts");
// };

const getAllPostsService = async () => {
  const response = await axios.get("/api/posts");
  return response;
};
export { getAllPostsService };
