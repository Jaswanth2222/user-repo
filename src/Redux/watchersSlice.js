import { createSlice } from "@reduxjs/toolkit";

const watchersSlice = createSlice({
    name: "watchers",
    initialState: {
        count : 0
    },
    reducers: {
        watchersValue: (state, action) => {
            state.count = (action.payload);
        }
    }
})

export const { watchersValue } = watchersSlice.actions;
export default watchersSlice.reducer;