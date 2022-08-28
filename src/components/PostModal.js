import React, { useState } from "react";
import EditPostModal from "./EditPostModal";
import ClearIcon from "@material-ui/icons/Clear";
const PostModal = ({ setModal }) => {
  const [editPostModal, setEditPostModal] = useState(false);
  return (
    <div>
      <div
        className="flex   justify-start  p-1 bg-gray-50 
       border-2"
        // onClick={() => setModal(false)}
      >
        <div className="flex flex-col">
          <button
            className="hover:bg-white w-14 font-bold text-gray-700"
            onClick={() => setEditPostModal(true)}
          >
            Edit
          </button>
          <button className="hover:bg-white w-14 font-bold  text-gray-700">
            Delete
          </button>
        </div>

        <div className="flex justify-end">
          <ClearIcon onClick={() => setModal(false)} />
        </div>
      </div>

      {editPostModal && <EditPostModal setModal={setEditPostModal} />}
    </div>
  );
};

export default PostModal;
