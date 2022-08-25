import React from "react";

const ProfileCard = ({ details }) => {
  return (
    <div className="flex md:space-x-5 cursor-pointer border-2  spaxe-x-1  md:flex-nowrap m-2 p-2 flex-wrap md:p-4">
      <div className="h-28 w-28 mx-auto md:h-48 md:w-48 ">
        <img
          src={details?.avatarURL}
          className="h-full w-full rounded-full"
        ></img>
      </div>

      <div className="space-y-1 flex-1">
        {/* ***************************** */}
        <div className="flex items-center justify-between ">
          <div className=" flex flex-col ">
            <h2 className="text-gray-800 font-semibold text-[1.5rem]">
              {details?.firstName} {details?.lastName}
            </h2>
            <p className="text-gray-500  text-[1.1rem]">{details?.username}</p>
          </div>
          <button className="w-14 rounded-full bg-purple-500 text-white p-1">
            Edit
          </button>
        </div>
        {/* ***************************** */}

        <p>{details.bio}</p>
        <div className="font-thin text-sm text-gray-400">
          <a href={details?.website}>{details?.website}</a>
        </div>

        <div className="flex space-x-7">
          <div className="flex space-x-1">
            <h4 className="font-extrabold">{details.following.length}</h4>
            <p>Following</p>
          </div>
          <div className="flex space-x-1">
            <h4 className="font-extrabold">{details.followers.length}</h4>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
