import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload); // Correctly update mySearch
    },
  },
});

export const { cacheResults } = SearchSlice.actions;
export default SearchSlice.reducer;
