import axios from "axios";

export const getAllUsersService = async () => {
  const response = await axios.get("/api/users");
  return response;
};
