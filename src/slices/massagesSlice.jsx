import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    massages:[]
}

export const massagesSlice = createSlice({
    name: 'massages',
    initialState,
    reducers:{
        loadMassages: (state, action)=>{
            state.massages = action.payload
            console.log('test', state.massages)
        },
        
    }
})

export const {loadMassages} = massagesSlice.actions

export const selectMassages = (state) => state.massages

export default massagesSlice.reducer