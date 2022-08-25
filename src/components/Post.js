import CommentIcon from "@material-ui/icons/CommentOutlined";
import BookmarkOutlineIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkRounded";
import MoreVertIcon from "@material-ui/icons/MoreVertRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkPost,
  removePostFromBookmark,
} from "../features/bookmarksSlice";
import { dislikePost, likePost } from "../features/postsSlice";

const Post = ({ item }) => {
  const { lastName, username, firstName, _id, likes } = item;

  const { likedBy, dislikedBy } = likes;
  const { user, token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const handleLike = async () => {
    const res = await dispatch(likePost({ postId: _id, token }));
  };
  const handleDislike = async () => {
    const res = await dispatch(dislikePost({ postId: _id, token }));
  };

  const handleBookmark = async () => {
    const res = await dispatch(bookmarkPost({ postId: _id, token }));
    console.log(res);
  };

  const handleRemoveBookmark = async () => {
    const res = await dispatch(removePostFromBookmark({ postId: _id, token }));
    console.log(res);
  };
  return (
    <div className="flex space-x-1 p-1 m-1 border cursor-pointer">
      <img src={item.avatarURL} className="h-14 w-14 rounded-full"></img>
      <div className="space-y-3 flex-1">
        <div className="flex items-center justify-between ">
          <div>
            <Link to={`/profile/${username}`}>
              <h3 className="text-purple-500 font-[600] hover:underline">
                {item.firstName} {item.lastName}
              </h3>
            </Link>

            <p className="text-gray-500 font-thin text-[.7rem] md:text-[.9rem]">
              {item.username}
            </p>
          </div>
          <h3 className="text-gray-500 font-thin text-[.7rem] md:text-[.9rem] flex items-center">
            <span className="text-gray-500 text-[1.3rem]">•&nbsp;</span>{" "}
            <Moment fromNow>{item.updatedAt}</Moment>
          </h3>
          {token && (
            <MoreVertIcon className="text-gray-600 font-thin text-[.8rem]" />
          )}
        </div>

        <p className="text-[.8rem] md:text-[1rem] ">{item.content}</p>

        <div className="text-gray-600 flex justify-between">
          {likedBy?.find(({ username }) => username === user.username) ? (
            <FavoriteIcon
              className="btn"
              style={{ color: "#8F00FF" }}
              onClick={handleDislike}
            />
          ) : (
            <FavoriteBorderIcon className="btn" onClick={handleLike} />
          )}
          <CommentIcon className="btn" />

          {bookmarks?.find((i) => i._id === _id) ? (
            <BookmarkIcon
              style={{ color: "#8F00FF" }}
              onClick={handleRemoveBookmark}
            />
          ) : (
            <BookmarkOutlineIcon className="btn" onClick={handleBookmark} />
          )}
        </div>

        <p className="text-gray-500 text-[.9rem] font-[500]">
          Liked by {item.likes?.likedBy[1]?.firstName} and{" "}
          {item.likes?.likeCount} other
        </p>
      </div>
    </div>
  );
};

export default Post;
