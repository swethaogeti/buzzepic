import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";

import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

import { getPost } from "../features/postSlice";
import { getAllPosts } from "../features/postsSlice";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
const PostPage = () => {
  const { postId } = useParams();
  const { post } = useSelector((state) => state.post);
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId, posts]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [postId]);

  return (
    <div className=" h-screen  md:max-w-7xl mx-auto">
      <Navbar />
      <main className="flex ">
        <Sidebar />

        {post ? (
          <div
            className="flex-grow  h-screen pb-20  
          "
          >
            <div className="mx-auto max-w-lg md:max-w-full">
              {post && <Post item={post} />}
              <CommentInput post={post} />

              {post?.comments?.map((item) => {
                return <Comment item={item} />;
              })}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-lg md:max-w-full">
            <h1>No posts found</h1>
          </div>
        )}

        <Suggestions />
      </main>
    </div>
  );
};

export default PostPage;
