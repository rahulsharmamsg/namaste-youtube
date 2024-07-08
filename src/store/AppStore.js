// AppStore.js

import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice"; // Adjust path as necessary
import Search from "./Search"; // Adjust path as necessary
import YouTubeVideoReducer from "./YouTubeVideoReducer"; // Adjust path as necessary
import LiveMessage from "./LiveMessage";

const AppStore = configureStore({
    reducer: {
        nav: NavSlice,
        searchslice: Search,
        youtube: YouTubeVideoReducer,
        livemsg: LiveMessage
    }
});

export default AppStore;
