import React from "react";
import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

const Profile = () => {
  return (
    <div className=" h-screen md:max-w-7xl mx-auto">
      <Navbar />
      <main className=" flex">
        <Sidebar />
        <ProfileContainer />
        <Suggestions />
      </main>
    </div>
  );
};

export default Profile;
