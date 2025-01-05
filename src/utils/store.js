import { configureStore } from "@reduxjs/toolkit";
import watchLaterSlice from "./WatchLater";


const store = configureStore({
  reducer:{
    watchLater:watchLaterSlice
  }, 
})

export default store;