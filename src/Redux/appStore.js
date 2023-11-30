import { configureStore } from "@reduxjs/toolkit";
import watchersReducer from "./watchersSlice"


const appStore = configureStore({
    reducer: {
        watchers: watchersReducer,
    }
})

export default appStore;