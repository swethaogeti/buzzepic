import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAllUserPostsService,
  getUserService,
  editUserService,
} from "../services";
import { editPost } from "./postsSlice";

const initialState = {
  userProfile: {
    details: null,
    isloading: false,
    error: null,
  },
  userPosts: {
    posts: null,
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
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const { data } = await getAllUserPostsService(userData, token);
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
      state.userProfile.isloading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.userProfile.isloading = false;
      state.userProfile.details = payload.user;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.userProfile.isloading = false;
      state.userProfile.error = payload;
    },

    [getAllUserPosts.pending]: (state) => {
      state.userPosts.isloading = true;
    },
    [getAllUserPosts.fulfilled]: (state, { payload }) => {
      state.userPosts.isloading = false;
      state.userPosts.posts = payload.posts;
    },
    [getAllUserPosts.rejected]: (state, { payload }) => {
      state.userPosts.error = payload;
      state.userPosts.isloading = false;
    },
    [editPost.pending]: (state) => {
      state.userProfile.isloading = true;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.userProfile.isloading = false;
      state.userProfile.details = payload.user;
    },
    [editPost.rejected]: (state, { payload }) => {
      state.userProfile.isloading = false;
      state.userProfile.error = payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export { getUser, getAllUserPosts, editUser };
