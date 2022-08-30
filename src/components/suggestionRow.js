import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../features/usersSlice";

const SuggestionRow = ({ item }) => {
  const { _id, avatarURL, firstName, lastName, username } = item;
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleFollowUser = () => {
    dispatch(followUser({ followUserId: _id, token }));
  };
  return (
    <div className="mt-2 px-3 py-1 outline-1 rounded-md flex items-center justify-between  hover:bg-gray-100">
      <Link to={`/profile/${username}`}>
        <div className="flex space-x-2">
          <img src={avatarURL} className="h-12 w-12 rounded-full "></img>

          <div className="flex flex-col justify-start">
            <p className="text-[1rem] text-gray-700">
              {firstName} {lastName}
            </p>
            <p className="text-gray-400 text-[.8rem] font-light">{username}</p>
          </div>
        </div>
      </Link>

      <button
        className="text-purple-500 font-bold cursor-pointer"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  );
};

export default SuggestionRow;
