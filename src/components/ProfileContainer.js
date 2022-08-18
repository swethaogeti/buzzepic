import React from "react";
import Posts from "./Posts";
import ProfileCard from "./ProfileCard";
import TextInputBox from "./TextInputBox";

const ProfileContainer = () => {
  return (
    <div className="flex-grow  h-screen pb-44    ">
      <div className="mx-auto max-w-lg md:max-w-full ">
        <ProfileCard />
        <Posts />
      </div>
    </div>
  );
};

export default ProfileContainer;
