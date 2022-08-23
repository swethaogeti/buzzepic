import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { postsReducer } from "./features/postsSlice";
import { bookmarkReducer } from "./features/bookmarksSlice";
import { postReducer } from "./features/postSlice";
import { usersReducer } from "./features/usersSlice";
import { userReducer } from "./features/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    bookmarks: bookmarkReducer,
    post: postReducer,
    users: usersReducer,
    user: userReducer,
  },
});
