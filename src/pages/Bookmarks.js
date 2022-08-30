import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { getAllBookmarks } from "../features/bookmarksSlice";

const Bookmarks = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  console.log(bookmarks);
  useEffect(() => {
    getAllBookmarks(token);
  }, []);
  return (
    <div className=" h-screen  md:max-w-7xl mx-auto">
      <main className="flex">
        <Sidebar />

        {bookmarks.length ? (
          <Container posts={bookmarks} />
        ) : (
          <div className=" flex items-center justify-center w-full">
            <img
              src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/613e3b12dd1556b17a1611cc_wfh-drawkit-thumbnail.png"
              className=" object-contain "
            ></img>
          </div>
        )}

        <Suggestions />
      </main>
    </div>
  );
};

export default Bookmarks;
