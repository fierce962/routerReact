import { createSlice } from '@reduxjs/toolkit';
import { getIndexByPath } from '../../models/routingElements';

const currentRouting = createSlice({
    name: 'currentRouting',
    initialState: {
        indexProps: 0,
        path: '/',
    },
    reducers: {
        changePath: (state, actions) => {
            if(state.path !== actions.payload){
                state.path = actions.payload;
                state.indexProps = getIndexByPath(actions.payload);
            }
        },
    }
})


export default currentRouting.reducer;
export const { changePath } = currentRouting.actions;
