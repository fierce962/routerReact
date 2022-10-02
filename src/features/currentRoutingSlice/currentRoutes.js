import { createSlice } from '@reduxjs/toolkit';


const currentRouting = createSlice({
    name: 'currentRouting',
    initialState: {
        indexProps: 0,
        path: '/',
    },
    reducers: {
        changePath: (state, actions) => {
            state.path = actions.payload;
        }
    }
})


export default currentRouting.reducer;
export const { changePath } = currentRouting.actions;
