import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAllUserPostsService,
  getUserService,
  editUserService,
} from "../services";
import { editPost } from "./postsSlice";

const initialState = {
  profile: {
    userProfile: null,
    isloading: false,
    error: null,
  },
  posts: {
    userPosts: [],
    isloading: false,
    error: null,
  },
};

const getUser = createAsyncThunk(
  "user/getUser",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getUserService(username);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const getAllUserPosts = createAsyncThunk(
  "user/getAllUserPosts",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getAllUserPostsService(username);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const editUser = createAsyncThunk(
  "user/editUser",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editUserService(userData, token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.profile.isloading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.profile.isloading = false;
      state.profile.userProfile = payload.user;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.profile.isloading = false;
      state.profile.error = payload;
    },

    [getAllUserPosts.pending]: (state) => {
      state.posts.isloading = true;
    },
    [getAllUserPosts.fulfilled]: (state, { payload }) => {
      state.posts.isloading = false;
      state.posts.userPosts = payload.posts;
    },
    [getAllUserPosts.rejected]: (state, { payload }) => {
      state.posts.error = payload;
      state.posts.isloading = false;
    },
    [editPost.pending]: (state) => {
      state.profile.isloading = true;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.profile.isloading = false;
      state.profile.userProfile = payload.user;
    },
    [editPost.rejected]: (state, { payload }) => {
      state.profile.isloading = false;
      state.profile.error = payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export { getUser, getAllUserPosts, editUser };
