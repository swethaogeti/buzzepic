import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bookmarks from "./pages/Bookmarks";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import PostPage from "./pages/PostPage";
import LikesModal from "./components/LikesModal";
import EditProfileModal from "./components/EditProfileModal";
import EditPostModal from "./components/EditPostModal";

function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/posts/:postId" element={<PostPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
