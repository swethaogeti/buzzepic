import axios from "axios";

export const getAllBookmarkService = (token) => {
  axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
};
