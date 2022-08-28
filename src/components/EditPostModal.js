import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
const EditPostModal = ({ setModal }) => {
  return (
    <div className="bg-modal bg-[#5c58583a]">
      <div className="bg-white flex p-2 ">
        <div className="flex flex-col space-y-3  md:w-[26rem] w-[18rem] h-auto p-2">
          <div className="flex justify-between">
            <h1 className="text-[1.4rem] font-bold text-gray-800">
              Editing Post
            </h1>
            <ClearIcon onClick={() => setModal(false)} />
          </div>
          <div className="flex space-x-2">
            <img
              src="https://cdn.dribbble.com/users/2231291/screenshots/10845894/media/6eaae88445ba46c54c2d9debec0ff64d.jpg?compress=1&resize=1000x750&vertical=top"
              className="w-12 h-12 rounded-full md:w-14 md:h-14"
            ></img>
            <div>
              <h2 className="text-gray-700 font-[600] text-[0.9rem] ">
                Swetha Ogeti
              </h2>
              <p className="text-[.8rem] font-light text-gray-500">@Sweet555</p>
            </div>
          </div>
          <form className="flex flex-1" onSubmit={(e) => e.preventDefault}>
            <textarea
              className="flex-grow border-2 h-24 focus:outline-purple-700 p-2  placeholder-gray-700 font-medium text-[1rem]"
              placeholder="life is not a matter of holding good cards but of playing a poor hand well"
            ></textarea>
          </form>
          <div className="flex justify-end space-x-3">
            <button className="w-14 p-1 text-purple-600 rounded-md font-bold">
              Cancel
            </button>
            <button className="w-14 p-1 text-purple-white bg-purple-500 rounded-md text-white font-bold">
              Save
            </button>
          </div>
        </div>
        {/* <ClearIcon /> */}
      </div>
    </div>
  );
};

export default EditPostModal;
