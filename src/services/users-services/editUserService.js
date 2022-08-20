import axios from "axios";
export const editUserService = (userData, token) => {
  axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: token } }
  );
};
