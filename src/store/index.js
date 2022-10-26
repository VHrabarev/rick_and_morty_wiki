import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import promiseReducer from './reducers/promiseReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        promise: promiseReducer,
    },
});

export default store;