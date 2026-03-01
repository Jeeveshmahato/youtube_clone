import { createSlice } from "@reduxjs/toolkit";

const MAX_CACHE_SIZE = 100;

const SearchSlice = createSlice({
  name: "Search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      const payload = action.payload;
      // Prevent prototype pollution - only assign own, safe keys
      for (const key of Object.keys(payload)) {
        if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
        state[key] = payload[key];
      }
      // Evict oldest entries if cache exceeds max size
      const keys = Object.keys(state);
      if (keys.length > MAX_CACHE_SIZE) {
        const toRemove = keys.slice(0, keys.length - MAX_CACHE_SIZE);
        toRemove.forEach((k) => delete state[k]);
      }
    },
  },
});

export const { cacheResults } = SearchSlice.actions;
export default SearchSlice.reducer;
