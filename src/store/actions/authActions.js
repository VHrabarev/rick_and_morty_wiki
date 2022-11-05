import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
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

const userLogin = createAsyncThunk(
    "auth/userLogin",
    async function({email, password}, {rejectWithValue}) {
        console.log(email, password);
        try {
            const auth = getAuth(app);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
            return userCredential.user;
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

const checkUserLoginStatusAction = function(state) {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if(user) {
            state.user.authStatus = "user";
            state.user.userInfo = user;
        } else {
            state.user.authStatus = "anon";
            state.user.userInfo = {};
        };
    });
};

export {userRegister, userLogin, userLogout, userFullRegistet, checkUserLoginStatusAction};