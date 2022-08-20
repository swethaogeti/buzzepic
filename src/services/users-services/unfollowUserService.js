import axios from "axios";

export const unfollowUserService = (followUserId, token) => {
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};
