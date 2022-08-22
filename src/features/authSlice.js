import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_DATA, USER_TOKEN } from "../constants";
import { loginService, signupService } from "../services";

const initialState = {
  token: localStorage.getItem(USER_TOKEN),
  user: JSON.parse(localStorage.getItem(USER_DATA)),
  loading: false,
};

const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await loginService(user);
      return data;
    } catch (error) {
      return rejectWithValue(
        "error occured in login service",
        error.response.data
      );
    }
  }
);

const signin = createAsyncThunk(
  "auth/signIn",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await signupService(user);
      return data;
    } catch (error) {
      return rejectWithValue(
        "error occured in signup service",
        error.response.data
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem(USER_DATA);
      localStorage.removeItem(USER_TOKEN);
    },
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
      state.loading = false;
    },

    [login.rejected]: (state) => {
      state.loading = false;
    },
    [signin.pending]: (state) => {
      state.loading = true;
    },
    [signin.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
      state.loading = false;
    },
    [signin.rejected]: (state) => {
      state.loading = false;
    },
  },
});
const { signout } = authSlice.actions;
const authReducer = authSlice.reducer;
export { authReducer, login, signin, signout };
