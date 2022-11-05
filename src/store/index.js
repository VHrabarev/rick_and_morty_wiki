import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import promiseReducer from './reducers/promiseReducer';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

const store = configureStore({
    reducer: {
        auth: authReducer,
        promise: promiseReducer,
    },
    middleware: customizedMiddleware,
});

store.subscribe(() => console.log(store.getState()));

export default store;