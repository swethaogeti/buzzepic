import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostService } from "../services";

const initialState = {
  post: null,
  isloading: false,
  error: "",
};

const getPost = createAsyncThunk(
  "post/getPost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await getPostService(postId);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [getPost.pending]: (state) => {
      state.isloading = true;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.isloading = false;

      state.post = payload.post;
      state.error = "";
    },
    [getPost.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
  },
});

export const postReducer = postSlice.reducer;
export { getPost };
