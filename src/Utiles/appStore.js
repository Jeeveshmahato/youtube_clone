import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./SidebarSlice";
import VideoReducer from "./VideoSlice";
import SearchReducer from "./SearchSlice.js";
import ChatReducer from "./chatSlice.js";
const appStore = configureStore({
  reducer: {
    expandMenu: SidebarReducer,
    MyVideos: VideoReducer,
    mySearch: SearchReducer,
    chat: ChatReducer,
  },
});
export default appStore;
