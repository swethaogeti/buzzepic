import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../features/userSlice";

const EditProfileModal = ({ setModal, user }) => {
  const { token } = useSelector((state) => state.auth);
  const { _id, firstName, lastName, username, avatarURL, bio, website } = user;
  const [profileData, setProfileData] = useState({
    firstName,
    lastName,
    username,
    avatarURL,
    bio,
    website,
  });
  const dispatch = useDispatch();
  const handleEditUserProfile = async (e) => {
    e.preventDefault();
    const res = await dispatch(editUser({ userData: profileData, token }));

    setModal(false);
  };
  return (
    <div className="bg-modal z-50">
      <div className="flex flex-col bg-white md:space-y-4  md:w-auto w-[18rem] h-auto p-2 space-y-1 md:p-6 rounded-md justify-start">
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
            <input
              placeholder={profileData.firstName}
              value={profileData.firstName}
              onChange={(e) =>
                setProfileData({ ...profileData, firstName: e.target.value })
              }
              className="modal-input"
            ></input>
          </div>

          <div>
            <h3 className="modal-h2">
              Last Name <span className="text-red-600 font-semibold">*</span>
            </h3>
            <input
              placeholder={profileData.lastName}
              value={profileData.lastName}
              className="modal-input"
              onChange={(e) =>
                setProfileData({ ...profileData, lastName: e.target.value })
              }
            ></input>
          </div>
        </div>
        {/* **************************************** */}
        <div className="flex flex-col">
          <h2 className="modal-h2">
            Username <span className="text-red-600 font-semibold">*</span>
          </h2>
          <input
            placeholder={profileData.username}
            value={profileData.username}
            onChange={(e) =>
              setProfileData({ ...profileData, username: e.target.value })
            }
            className="modal-input flex-1"
          ></input>
        </div>
        {/* **************************************** * */}
        <div className="flex flex-col">
          <h2 className="modal-h2">Avatar URL</h2>
          <input
            placeholder={profileData.avatarURL}
            value={profileData.avatarURL}
            onChange={(e) =>
              setProfileData({ ...profileData, avatarURL: e.target.value })
            }
            className="modal-input"
          ></input>
        </div>

        <div className="flex flex-col">
          <h2 className="modal-h2">Bio</h2>
          <input
            placeholder={profileData.bio}
            value={profileData.bio}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
            className="modal-input"
          ></input>
        </div>

        <div className="flex flex-col">
          <h2 className="modal-h2">Website</h2>
          <input
            placeholder={profileData.website}
            value={profileData.website}
            onChange={(e) =>
              setProfileData({ ...profileData, website: e.target.value })
            }
            className="modal-input"
          ></input>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            className="w-14 p-1 text-purple-600 rounded-md font-bold"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            className="w-14 p-1 text-purple-white bg-purple-500 rounded-md text-white font-bold"
            onClick={(e) => handleEditUserProfile(e)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
