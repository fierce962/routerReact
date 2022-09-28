import { createSlice } from '@reduxjs/toolkit';


const currentRouting = createSlice({
    name: 'currentRouting',
    initialState: {
        path: '/'
    },
    reducers: {
        
    }
})


export default currentRouting.reducer;
export const { setNewRoute } = currentRouting.actions;
