import React from "react";
import Container from "../components/Container";
import ProfileContainer from "../components/ProfileContainer";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

const Profile = () => {
  return (
    <div className=" h-screen md:max-w-7xl mx-auto">
      <main className=" flex">
        <Sidebar />
        <ProfileContainer />
        <Suggestions />
      </main>
    </div>
  );
};

export default Profile;
