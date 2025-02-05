import {configureStore} from "@reduxjs/toolkit"
import navReducer from "./navSlice"
import lockScreenReducer from "./lockScreenSlice"

const store = configureStore({
    reducer: {
        navigation: navReducer,
        lockScreen: lockScreenReducer
    }
})

export default store