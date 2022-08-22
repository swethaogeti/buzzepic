import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  followUserService,
  unfollowUserService,
  getAllUsersService,
} from "../services";

const initialState = {
  users: [],
  isloading: false,
  error: null,
};

const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsersService();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const followUser = createAsyncThunk(
  "users/followUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await followUserService(followUserId, token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await unfollowUserService(followUserId, token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isloading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.users = payload.users;
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.users = payload.users;
    },
    [followUser.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.users = payload.users;
    },
    [unfollowUser.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export { getAllUsers, followUser, unfollowUser };
