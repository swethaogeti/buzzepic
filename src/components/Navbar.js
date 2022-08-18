import { Avatar } from "@material-ui/core";
import React from "react";

const Navbar = () => {
  return (
    <div className=" p-4 sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-lg md:max-w-7xl">
        <h1 className="text-purple-600 text-4xl font-bold ">BuzzEpic</h1>

        <div className="flex  space-x-2 items-center cursor-pointer">
          <Avatar src="https://avatars.githubusercontent.com/u/65771591?v=4"></Avatar>
          <p className="text-gray-600 font-bold">Sweety </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
