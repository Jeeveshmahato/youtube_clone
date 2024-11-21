import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "VideoSlice",
    initialState: {
        MyVideo: null,
    },
    reducers: {
        setVideo: (state, action) => {
            state.MyVideo = action.payload;
        }
    }
})
export const {setVideo} = VideoSlice.actions
export default VideoSlice.reducer;