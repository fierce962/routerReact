import { createSlice } from '@reduxjs/toolkit';


const currentRouting = createSlice({
    name: 'currentRouting',
    initialState: {
        currentRoute: ''
    },
    reducers: {
        setNewRoute: () => {

        },
    }
})


export default currentRouting.reducer;
export const { setNewRoute } = currentRouting.actions;
