import {createSlice} from "@reduxjs/toolkit"

const navSlice = createSlice({
    name: "navigation",
    initialState: {
        isTransparent: false,
    },
    reducers: {
        setTransparentNav: (state, action) => {
            state.isTransparent = action.payload
        }
    }
})

export const {setTransparentNav} = navSlice.actions

export default navSlice.reducer