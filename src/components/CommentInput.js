import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostComment } from "../features/postsSlice";

const CommentInput = ({ post }) => {
  const { _id } = post;

  const { user, token } = useSelector((state) => state.auth);
  const { firstName, lastName, username, avatarURL } = user;
  const [commentData, setCommentData] = useState({ text: "" });
  const dispatch = useDispatch();

  const handleCreateComment = async () => {
    if (commentData.text !== "") {
      const res = await dispatch(
        addPostComment({
          postId: _id,
          commentData: {
            firstName,
            lastName,
            username,
            avatarURL,
            text: commentData.text,
          },
          token,
        })
      );
    }
    setCommentData({ text: "" });
  };
  return (
    <div className="flex  items-center p-3 space-x-2">
      <input
        placeholder="Add Comment"
        value={commentData.text}
        className="flex-1 bg-gray-100 border p-2 m-1 focus:outline-purple-400"
        onChange={(e) =>
          setCommentData({ ...commentData, text: e.target.value })
        }
      ></input>
      <div>
        <button
          className="p-1 b text-[1rem] w-20 bg-purple-500  text-white rounded-md"
          onClick={handleCreateComment}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
