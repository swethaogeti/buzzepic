import React from "react";

const SuggestionRow = ({ item }) => {
  return (
    <div className="mt-2 px-3 py-1 outline-1 rounded-md flex items-center justify-between cursor-pointer  hover:bg-gray-100">
      <div className="flex space-x-2">
        <img
          src={item.userImg}
          className="h-12 w-12 rounded-full object-contain"
        ></img>

        <div className="flex flex-col justify-start">
          <p className="text-[1rem] text-gray-700">{item.username}</p>
          <p className="text-gray-400 text-[.8rem] font-light">
            {item.worksAt}
          </p>
        </div>
      </div>

      <p className="text-purple-500 font-bold cursor-pointer"> Follow</p>
    </div>
  );
};

export default SuggestionRow;
