import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./SidebarSlice";
import VideoReducer from "./VideoSlice";
const appStore = configureStore({
  reducer: {
    expandMenu: SidebarReducer,
    MyVideos: VideoReducer,
  },
});
export default appStore;
