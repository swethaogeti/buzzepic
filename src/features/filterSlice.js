import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "trending",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterSort: (state, { payload }) => {
      state.sort = payload;
    },
  },
});

const { filterSort } = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export { filterReducer, filterSort };
