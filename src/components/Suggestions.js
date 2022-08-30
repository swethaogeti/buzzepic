import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/usersSlice";
import Profile from "../pages/Profile";

import SuggestionRow from "./suggestionRow";

const Suggestions = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const getSuggestedUsers = (users, username, following) => {
    const followingUsernames = following.map((user) => user.username);
    return users.filter(
      (user) =>
        !followingUsernames.includes(user.username) &&
        user.username !== username
    );
  };

  const suggestedUsers = getSuggestedUsers(
    users,
    user.username,
    user.following
  );

  return (
    <div className=" hidden xl:inline-flex  mt-5  max-w-[600px] xl:min-w-[300px] pl-2">
      <div className="flex flex-col flex-1 p-2">
        <h2 className="text-[1.5rem] font-bold text-gray-600">Suggestions</h2>
        {suggestedUsers?.map((item) => {
          return <SuggestionRow item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Suggestions;
