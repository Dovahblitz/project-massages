import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import massagesReducer from "./massagesSlice"

import appointmentsReducer from "./appointmentsSlice"

const store = configureStore({
    reducer:{
        user: userReducer,
        massages: massagesReducer,
        appointments: appointmentsReducer
    }
})

export default store