import React, { useState } from "react";
import EditPostModal from "./EditPostModal";
import ClearIcon from "@material-ui/icons/Clear";
const PostModal = ({ setModal, handleDeletePost, post }) => {
  const [editPostModal, setEditPostModal] = useState(false);

  return (
    <div>
      <div
        className="flex   justify-start  p-1 bg-white shadow-md
       border-2"
      >
        <div className="flex flex-col">
          <button
            className="hover:bg-gray-100 w-14 font-medium text-gray-700"
            onClick={() => {
              setEditPostModal(true);
            }}
          >
            Edit
          </button>
          <button
            className="hover:bg-gray-100 w-14 font-medium  text-gray-700"
            onClick={handleDeletePost}
          >
            Delete
          </button>
        </div>

        <div className="flex justify-end">
          <ClearIcon onClick={() => setModal(false)} />
        </div>
      </div>

      {editPostModal && (
        <EditPostModal setModal={setEditPostModal} post={post} />
      )}
    </div>
  );
};

export default PostModal;
