import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "VideoSlice",
    initialState: {
        MyVideo: null,
        activeFilter: "All",
        nextPageToken: null,
        hasMore: true,
        isLoadingMore: false,
    },
    reducers: {
        setVideo: (state, action) => {
            state.MyVideo = action.payload;
        },
        appendVideos: (state, action) => {
            if (!state.MyVideo) {
                state.MyVideo = action.payload;
            } else {
                const existingIds = new Set(
                    state.MyVideo.map((v) =>
                        typeof v.id === "string" ? v.id : v.id?.videoId || v.id
                    )
                );
                const newVideos = action.payload.filter((v) => {
                    const id = typeof v.id === "string" ? v.id : v.id?.videoId || v.id;
                    return !existingIds.has(id);
                });
                state.MyVideo = [...state.MyVideo, ...newVideos];
            }
        },
        setNextPageToken: (state, action) => {
            state.nextPageToken = action.payload;
        },
        setHasMore: (state, action) => {
            state.hasMore = action.payload;
        },
        setIsLoadingMore: (state, action) => {
            state.isLoadingMore = action.payload;
        },
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
            // Reset pagination when filter changes
            state.MyVideo = null;
            state.nextPageToken = null;
            state.hasMore = true;
            state.isLoadingMore = false;
        },
    }
});

export const {
    setVideo,
    appendVideos,
    setNextPageToken,
    setHasMore,
    setIsLoadingMore,
    setActiveFilter,
} = VideoSlice.actions;
export default VideoSlice.reducer;
