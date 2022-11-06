import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import app from "../../api/firebase";

const userRegister = createAsyncThunk(
    "auth/userRegister",
    async function({email, password}, {rejectWithValue}) {
        try {
            const auth = getAuth(app);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch(error) {
            return rejectWithValue(error.code);
        };
    },
);

const userFullRegistet = createAsyncThunk(
    "auth/userFullRegistet",
    async function({email, password}, {dispatch, rejectWithValue}) {
        try {
            await dispatch(userRegister({email, password}));
        } catch(error) {
            return rejectWithValue(error.code);
        };
    },
);

const userLogout = createAsyncThunk(
    "auth/Logout",
    async function(_, {rejectWithValue}) {
        try {
            const auth = getAuth(app);
            await signOut(auth);
        } catch(error) {
            return rejectWithValue(error.message);
        };
    },
);

const checkUserLoginStatus = createAsyncThunk(
    "auth/checkUserLoginStatus",
    async function(_, {dispatch, rejectWithValue}) {
        try {
            const auth = getAuth(app);
            onAuthStateChanged(auth, (user) => {
                if(user) dispatch(addUserInfo(user));
            });
        } catch (error) {
            return rejectWithValue(error.message);
        };
    },
);

const userLogin = createAsyncThunk(
    "auth/userLogin",
    async function({email, password}, {rejectWithValue}) {
        try {
            const auth = getAuth(app);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            return rejectWithValue(error.code);
        };
    },
);

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
        addUserInfo(store, action) {
            store.user.authStatus = "user";
            store.user.userInfo = action.payload;
        },
    },
    extraReducers: {
        [userLogout.fulfilled]: (store) => {
            store.user.authStatus = "anon";
            store.user.userInfo = {};
        },
        [userLogin.fulfilled]: (store, action) => {
            store.user.authStatus = "user";
            store.user.userInfo = action.payload;
        },
    },
});

const authReducer = authSlice.reducer;
const {addUserInfo} = authSlice.actions;

export default authReducer;
export {userRegister, userLogout, userFullRegistet, checkUserLoginStatus, userLogin};