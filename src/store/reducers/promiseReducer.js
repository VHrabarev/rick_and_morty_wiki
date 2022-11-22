import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GQL from '../../api/fetchAPI';

const getAllCharacters = createAsyncThunk(
    "promise/getAllCharacters",
    async function({page = 1, search = ""}, {rejectWithValue}) {
        try {
            const result = await GQL(
                `query findAllCharacters($page:Int, $search:String) {
                    characters(page: $page, filter: { name: $search }) {
                        info {
                            pages,count
                        }
                        results{
                            name,image,created,id
                        }
                    }
                }`, 
                { page, search }
            );
            return result.data;
        } catch (error) {
            return rejectWithValue(error.text);
        };
    },
);

const getAllLocations = createAsyncThunk(
    "promise/getAllLocations",
    async function({page = 1, search = ""}, {rejectWithValue}) {
        try {
            const result = await GQL(
                `query findAllLocations($page:Int, $search:String) {
                    locations(page: $page, filter: { name: $search }) {
                        info {
                            pages,count
                        }
                        results{
                            name,created,id
                        }
                    }
                }`, 
                { page, search }
            );
            return result.data;
        } catch (error) {
            return rejectWithValue(error.text);
        };
    },
);

const getAllEpisodes = createAsyncThunk(
    "promise/getAllEpisodes",
    async function({page = 1, search = ""}, {rejectWithValue}) {
        try {
            const result = await GQL(
                `query findAllEpisodes($page:Int, $search:String) {
                    episodes(page: $page, filter: { name: $search }) {
                        info {
                            pages,count
                        }
                        results{
                            name,created,id
                        }
                    }
                }`, 
                { page, search }
            );
            return result.data;
        } catch (error) {
            return rejectWithValue(error.text);
        };
    },
);

const initialState = {
    cards: [],
    pages: 0,
    pending: {
        getAll: false,
    },
    error: {
        status: false,
        message: "",
    },
};

const promiseSlice = createSlice({
    name: "promise",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllCharacters.fulfilled]: (store, action) => {
            store.cards = action.payload.characters.results;
            store.pages = action.payload.characters.info.pages;
            store.pending.getAll = false;
            store.error = { status: false, message: "" };
        },
        [getAllCharacters.pending]: (store) => {
            store.cards = [];
            store.pages = 0;
            store.pending.getAll = true;
            store.error = { status: false, message: "" };
        },
        [getAllCharacters.rejected]: (store, action) => {
            store.cards = [];
            store.pages = 0;
            store.pending.getAll = false;
            store.error = { status: true, message: action.payload };
        },
        [getAllLocations.fulfilled]: (store, action) => {
            store.cards = action.payload.locations.results;
            store.pages = action.payload.locations.info.pages;
            store.pending.getAll = false;
            store.error = { status: false, message: "" };
        },
        [getAllLocations.pending]: (store) => {
            store.cards = [];
            store.pages = 0;
            store.pending.getAll = true;
            store.error = { status: false, message: "" };
        },
        [getAllLocations.rejected]: (store, action) => {
            store.cards = [];
            store.pages = 0;
            store.pending.getAll = false;
            store.error = { status: true, message: action.payload };
        },
        [getAllEpisodes.fulfilled]: (store, action) => {
            store.cards = action.payload.episodes.results;
            store.pages = action.payload.episodes.info.pages;
            store.pending.getAll = false;
            store.error = { status: false, message: "" };
        },
        [getAllEpisodes.pending]: (store) => {
            store.cards = [];
            store.pages = 0;
            store.pending.getAll = true;
            store.error = { status: false, message: "" };
        },
        [getAllEpisodes.rejected]: (store, action) => {
            store.cards = [];
            store.pages = 0;
            store.pending.getAll = false;
            store.error = { status: true, message: action.payload };
        },
    },
});

const promiseReducer = promiseSlice.reducer;

export default promiseReducer;
export {getAllCharacters, getAllLocations, getAllEpisodes};