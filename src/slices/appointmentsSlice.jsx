import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    appointments: []
}

export const appointmentsSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
        loadAppointments: (state, action)=>{
            state.appointments = action.payload
        },
    }
})

export const {loadAppointments} = appointmentsSlice.actions

export const selectAppointments = (state) => state.appointments

export default appointmentsSlice.reducer