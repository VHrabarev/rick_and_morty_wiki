import { createSlice } from '@reduxjs/toolkit';
import { checkUserLoginStatusAction, userLogin } from "../actions/authActions.js";

const initialState = {
    user: {
        authStatus: "anon",
        userInfo: {},
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        checkUserLoginStatus: checkUserLoginStatusAction,
    },
    extraReducers: {
        [userLogin.fulfilled]: (state, action) => {
            state.user.userInfo = action.payload;
        },
    },
});

const authReducer = authSlice.reducer;
const {checkUserLoginStatus} = authSlice.actions;

export default authReducer;
export {checkUserLoginStatus};