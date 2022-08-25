import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../features/postsSlice";
import { getAllUserPosts, getUser } from "../features/userSlice";

import Posts from "./Posts";
import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
  const { username } = useParams();
  const dispatch = useDispatch();

  const {
    profile: { userProfile },
    posts: { userPosts },
  } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getAllUserPosts(username));
  }, [username, users, posts]);

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="flex-grow  h-screen pb-44    ">
      <div className="mx-auto max-w-lg md:max-w-full ">
        {userProfile && <ProfileCard details={userProfile} />}
        {posts && <Posts posts={userPosts} />}
      </div>
    </div>
  );
};

export default ProfileContainer;
