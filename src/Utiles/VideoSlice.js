import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "VideoSlice",
    initialState: {
        MyVideo: null,
        activeFilter: "All",
    },
    reducers: {
        setVideo: (state, action) => {
            state.MyVideo = action.payload;
        },
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
    }
})
export const { setVideo, setActiveFilter } = VideoSlice.actions
export default VideoSlice.reducer;