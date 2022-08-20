import axios from "axios";

export const followUserService = (followUserId, token) => {
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};
