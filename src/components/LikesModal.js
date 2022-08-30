import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
const LikesModal = ({ setModal, likedBy }) => {
  return (
    <div className="bg-modal bg-[#6c68683a]">
      <div className="bg-white flex p-2">
        <div className="flex flex-col space-y-2 md:w-[18rem] w-[15rem] h-auto p-2">
          <div>
            <h2 className="text-[1.4rem] font-bold text-gray-800">Liked by</h2>
          </div>

          {likedBy.map((item) => {
            return (
              <div className="flex space-x-2">
                <img
                  src={item?.avatarURL}
                  className="w-14 h-14 rounded-full"
                ></img>
                <div>
                  <h2 className="text-gray-700 font-[600] text-[0.9rem] ">
                    {item.firstName} {item.lastName}
                  </h2>
                  <p className="text-[.8rem] font-light text-gray-500">
                    {item.username}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <ClearIcon onClick={() => setModal(false)} />
      </div>
    </div>
  );
};

export default LikesModal;
