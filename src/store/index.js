import {configureStore} from "@reduxjs/toolkit"
import navReducer from "./navSlice"

const store = configureStore({
    reducer: {
        navigation: navReducer
    }
})

export default store