import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../features/usersSlice";
const ProfileCard = ({ details, setModal }) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleFollowUser = () => {
    dispatch(followUser({ followUserId: details._id, token }));
  };

  const handleUnfollowUser = () => {
    dispatch(unfollowUser({ followUserId: details._id, token }));
  };
  return (
    <div className="flex md:space-x-5 cursor-pointer border-2  spaxe-x-1  md:flex-nowrap m-2 p-2 flex-wrap md:p-4">
      <div className="h-28 w-28 mx-auto md:h-48 md:w-48 ">
        <img
          src={details?.avatarURL}
          className="h-full w-full rounded-full"
        ></img>
      </div>

      <div className="space-y-1 flex-1">
        <div className="flex items-center justify-between ">
          <div className=" flex flex-col ">
            <h2 className="text-gray-800 font-semibold text-[1.5rem]">
              {details?.firstName} {details?.lastName}
            </h2>
            <p className="text-gray-500  text-[1.1rem]">{details?.username}</p>
          </div>

          {user.username === details.username ? (
            <button
              className="w-14 rounded-full bg-purple-500 text-white p-1"
              onClick={() => setModal(true)}
            >
              Edit
            </button>
          ) : user.following.find(
              (user) => user.username === details.username
            ) ? (
            <button
              className="w-auto rounded-full  bg-gray-200 text-gray-800 p-2 hover:scale-95 transition-all duration-100 ease-out  "
              onClick={handleUnfollowUser}
            >
              Following
            </button>
          ) : (
            <button
              className="w-16 rounded-full bg-purple-600 text-white p-1  hover:scale-95 transition-all duration-100 ease-out"
              onClick={handleFollowUser}
            >
              Follow
            </button>
          )}
        </div>

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
