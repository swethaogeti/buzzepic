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

const getAllBookmark = createAsyncThunk(
  "bookmarks/getAllBookmark",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await getAllBookmark(token);
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
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const removePostFromBookmark = createAsyncThunk(
  "bookmark/removePostFromBookmark",
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
    [getAllBookmark.pending]: (state) => {
      state.isloading = true;
    },
    [getAllBookmark.fulfulled]: (state, { payload }) => {
      state.isloading = false;
      state.bookmarks = payload.bookmarks;
      console.log(payload);
      state.error = " ";
    },
    [getAllBookmark.rejected]: (state, { payload }) => {
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
      state.bookmarks = payload.bookmarks;
    },
    [removePostFromBookmark.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const bookmarkReducer = bookmarkSlice.reducer;
export { getAllBookmark, removePostFromBookmark, bookmarkPost };
