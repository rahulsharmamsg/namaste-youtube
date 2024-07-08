// YouTubeVideo.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: []
};

const YouTubeVideoSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        fetchVideo: (state, action) => {
            state.videos = action.payload;
        }
    }
});

export const { fetchVideo } = YouTubeVideoSlice.actions;
export default YouTubeVideoSlice.reducer;
