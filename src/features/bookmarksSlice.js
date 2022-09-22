import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  bookmarkPostService,
  getAllBookmarkService,
  removePostFromBookmarkService,
} from "../services";
const initialState = {
  bookmarks: [],
  isloading: false,
  error: null,
};

const getAllBookmarks = createAsyncThunk(
  "bookmarks/getAllBookmarks",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await getAllBookmarkService(token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const bookmarkPost = createAsyncThunk(
  "bookmarks/bookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await bookmarkPostService(postId, token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const removePostFromBookmark = createAsyncThunk(
  "bookmarks/removePostFromBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await removePostFromBookmarkService(postId, token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  extraReducers: {
    [getAllBookmarks.pending]: (state) => {
      state.isloading = true;
    },
    [getAllBookmarks.fulfilled]: (state, { payload }) => {
      console.log(payload.bookmarks);
      state.isloading = false;
      state.bookmarks = payload.bookmarks;
      state.error = " ";
    },
    [getAllBookmarks.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },

    [bookmarkPost.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.bookmarks = payload.bookmarks;
    },
    [bookmarkPost.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },

    [removePostFromBookmark.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.bookmarks = payload.bookmarks;
    },
    [removePostFromBookmark.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const bookmarkReducer = bookmarkSlice.reducer;
export { getAllBookmarks, removePostFromBookmark, bookmarkPost };
