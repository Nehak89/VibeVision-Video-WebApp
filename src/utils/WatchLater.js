// watchLaterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState: {
    videos: [],
    videos: JSON.parse(localStorage.getItem("watch")) || []
  },
  reducers: {
    addToWatchLater: (state, action) => {
      // Add a video to the watch later list
      state.videos.push(action.payload);
    },
    removeFromWatchLater: (state, action) => {
      // Remove a video from the watch later list
      // state.videos = state.videos.filter(video => video.id !== action.payload.id);
      state.videos.pop();
    },
  },
});

export const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;
