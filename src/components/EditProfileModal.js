import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
const EditProfileModal = ({ setModal }) => {
  return (
    <div className="bg-modal z-50">
      <div className="flex flex-col bg-white space-y-4  md:w-auto w-[22rem] h-auto p-6 rounded-md justify-start">
        <div className="flex justify-between">
          <h1 className="text-[1.4rem] font-bold text-gray-800">
            Editing Profile
          </h1>
          <ClearIcon onClick={() => setModal(false)} />
        </div>
        {/* **************************************** */}
        <div className="flex space-x-2 flex-col md:flex-row">
          <div>
            <h3 className="modal-h2">
              First Name <span className="text-red-600 font-semibold">*</span>
            </h3>
            <input placeholder="Swetha" className="modal-input"></input>
          </div>

          <div>
            <h3 className="modal-h2">
              Last Name <span className="text-red-600 font-semibold">*</span>
            </h3>
            <input placeholder="Ogeti" className="modal-input"></input>
          </div>
        </div>
        {/* **************************************** */}
        <div className="flex flex-col">
          <h2 className="modal-h2">
            Username <span className="text-red-600 font-semibold">*</span>
          </h2>
          <input placeholder="Sweety555" className="modal-input flex-1"></input>
        </div>
        {/* **************************************** * */}
        <div className="flex flex-col">
          <h2 className="modal-h2">Avatar URL</h2>
          <input
            placeholder="https://avatars.githubusercontent.com/u/65771591?s=120&v=4"
            className="modal-input"
          ></input>
        </div>

        <div className="flex flex-col">
          <h2 className="modal-h2">Bio</h2>
          <input
            placeholder="Be you! world will adjust"
            className="modal-input"
          ></input>
        </div>

        <div className="flex flex-col">
          <h2 className="modal-h2">Website</h2>
          <input
            placeholder="https://github.com/swethaogeti"
            className="modal-input"
          ></input>
        </div>

        <div className="flex justify-end space-x-3">
          <button className="w-14 p-1 text-purple-600 rounded-md font-bold">
            Cancel
          </button>
          <button className="w-14 p-1 text-purple-white bg-purple-500 rounded-md text-white font-bold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
