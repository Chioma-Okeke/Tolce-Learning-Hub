import { createSlice } from "@reduxjs/toolkit";

const lockScreenSlice = createSlice({
    name: "lockScreen",
    initialState: {
        isLocked: false,
    },
    reducers: {
        setIsLocked: (state, action) => {
            state.isLocked = action.payload;
        },
    },
});

export const { setIsLocked } = lockScreenSlice.actions;

export default lockScreenSlice.reducer;
