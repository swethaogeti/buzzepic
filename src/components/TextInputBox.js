import React from "react";
import CameraIcon from "@material-ui/icons/CameraAltRounded";
const TextInputBox = () => {
  return (
    <div className="bg-white p-2 text-gray-600  font-medium  mt-6">
      <div className="flex items-start justify-start space-x-1 p-2">
        <img
          src="https://avatars.githubusercontent.com/u/65771591?v=4"
          className="object-contain rounded-full w-12 h-12"
        ></img>
        <form className="flex flex-1">
          <textarea
            placeholder="what's in your mind?"
            className="flex-grow  h-24 focus:outline-none px-2"
          ></textarea>
          <button hidden type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-end p-2 border-b-2">
        {/* <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center hover:rounded-lg p-2 cursor-pointer">
          <CameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div> */}

        <button className="p-1 b text-[1rem] w-16 bg-purple-500  text-white rounded-full">
          Post
        </button>
      </div>
    </div>
  );
};

export default TextInputBox;
