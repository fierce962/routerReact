import { configureStore } from '@reduxjs/toolkit';
import currentRouting from '../features/currentRoutingSlice/currentRoutes';

export default configureStore({
    reducer: {
        currentRouting: currentRouting
    },
})