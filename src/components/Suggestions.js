import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/usersSlice";
import MiniModal from "./MiniModal";
import SuggestionRow from "./suggestionRow";

const Suggestions = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  console.log(users);
  const suggestedUsers = users;
  return (
    <div className=" hidden xl:inline-flex  mt-5  max-w-[600px] xl:min-w-[300px] pl-2">
      <div className="flex flex-col flex-1 p-2">
        <MiniModal className="flex justify-items-end" />
        <h2 className="text-[1.5rem] font-bold text-gray-600">Suggestions</h2>
        {suggestedUsers?.map((item) => {
          return <SuggestionRow item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Suggestions;
