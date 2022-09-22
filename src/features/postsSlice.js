import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";import { getAllPostsService } from "../services";
import {
  createPostService,
  likePostService,
  dislikePostService,
  deletePostService,
  upVoteCommentService,
  downVoteCommentService,
  editPostService,
  addPostCommentService,
  deletePostCommentService,
  editPostCommentService,
  getAllPostsService,
} from "../services";

const initialState = {
  posts: [],
  isloading: false,
  error: "",
};

const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await createPostService(postData, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in creating the post");
    }
  }
);

const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPostsService();
      return data;
    } catch (error) {
      rejectWithValue("error occured in get all post fetching");
    }
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(postId, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in like service");
    }
  }
);

const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(postId, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in dislike service");
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostService(postId, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in delete post service");
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editPostService(postId, postData, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in edit post service");
    }
  }
);

const addPostComment = createAsyncThunk(
  "posts/addPostComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await addPostCommentService(postId, commentData, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in add comment to post");
    }
  }
);

const deletePostComment = createAsyncThunk(
  "posts/deletePostComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostCommentService(postId, commentId, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in delete comment of the post ");
    }
  }
);

const editPostComment = createAsyncThunk(
  "posts/editPostComment",
  async ({ postId, commentId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editPostCommentService(
        postId,
        commentId,
        commentData,
        token
      );
      return data;
    } catch (error) {
      rejectWithValue("error occured in edit post comment service");
    }
  }
);

const upvotePostComment = createAsyncThunk(
  "posts/upvotePostComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await upVoteCommentService(postId, commentId, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in upvote comment service");
    }
  }
);

const downvotePostComment = createAsyncThunk(
  "posts/downvotePostComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await downVoteCommentService(postId, commentId, token);
      return data;
    } catch (error) {
      rejectWithValue("error occured in ");
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.isloading = true;
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.isloading = false;
      state.error = "";
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },

    [createPost.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.posts = payload.posts;

      state.error = " ";
    },
    [createPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [likePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [editPost.rejected]: (state, { payload }) => {
      state.error = "";
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [addPostComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [addPostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [deletePostComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [deletePostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [editPostComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [editPostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [upvotePostComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [upvotePostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [downvotePostComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.error = "";
    },
    [downvotePostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});
const postsReducer = postsSlice.reducer;

export {
  postsReducer,
  getAllPosts,
  createPost,
  editPost,
  likePost,
  dislikePost,
  deletePost,
  addPostComment,
  deletePostComment,
  upvotePostComment,
  downvotePostComment,
  editPostComment,
};
