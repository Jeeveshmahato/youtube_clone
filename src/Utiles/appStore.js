import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./SidebarSlice";
import VideoReducer from "./VideoSlice";
import SearchReducer from "./SearchSlice.js";
const appStore = configureStore({
  reducer: {
    expandMenu: SidebarReducer,
    MyVideos: VideoReducer,
    mySearch: SearchReducer,
  },
});
export default appStore;
