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
                            name,image,id
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
                            name,id
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
                            name,id
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

const getCharacterById = createAsyncThunk(
    "promise/getCharacterById",
    async function({id}, {rejectWithValue}) {
        try {
            const result = await GQL(
                `query findOneCharacterDyId($id:ID!) {
                    character(id: $id) {
                        id,name,status,species,type,gender,image,
                        origin {
                            id,name
                        },
                        location {
                            id,name
                        },
                        episode {
                            id,name,episode
                        },
                    }
                }`,
                {id}
            );
            return result.data.character;
        } catch (error) {
            return rejectWithValue(error.text);
        };
    },
);

const getEpisodeById = createAsyncThunk(
    "promise/getEpisodeById",
    async function({id}, {rejectWithValue}) {
        try {
            const result = await GQL(
                `query findOneEpisodeById($id:ID!) {
                    episode(id:$id) {
                        id,name,air_date,episode,
                        characters {
                            id,name,image
                        }
                    }
                }`,
                {id}
            );
            return result.data.episode;
        } catch (error) {
            return rejectWithValue(error.text);
        };
    },
);

const getLocationById = createAsyncThunk(
    "promise/getLocationBuId",
    async function({id}, {rejectWithValue}) {
        try {
            const result = await GQL(
                `query findOneLocationById($id:ID!) {
                    location(id:$id) {
                        id,name,type,dimension,
                        residents {
                            id,name,image
                        }
                    }
                }`,
                {id}
            );
            return result.data.location;
        } catch (error) {
            return rejectWithValue(error.text);
        };
    },
);

const defaultCharacter = {
    image: "",
    name: "character name",
    status: "character status",
    species: "character species",
    gender: "character gender",
    location: {
        id: 0,
        name: "location name",
    },
    origin: {
        id: 0,
        name: "origin name",
    },
    episode: [{id: 0, name: "episode name"}],
};

const defaultLocation = {
    name: "location name",
    dimension: "dimension name",
    id: 0,
    residents: [{ id: 0, image: "residents image", name: "resident name" }],
    type: "location type",
};

const initialState = {
    cards: [],
    character: defaultCharacter,
    location: defaultLocation,
    episode: {},
    pages: 0,
    pending: {
        getAll: false,
        character: false,
        location: false,
        episode: false,
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
        [getCharacterById.fulfilled]: (store, action) => {
            store.character = action.payload;
            store.pending.character = false;
            store.error = { status: false, message: "" };
        },
        [getCharacterById.pending]: (store) => {
            store.character = {};
            store.pending.character = true;
            store.error = { status: false, message: "" };
        },
        [getCharacterById.rejected]: (store, action) => {
            store.character = {};
            store.pending.character = false;
            store.error = { status: true, message: action.payload };
        },
        [getLocationById.fulfilled]: (store, action) => {
            store.location = action.payload;
            store.pending.location = false;
            store.error = { status: false, message: "" };
        },
        [getLocationById.pending]: (store) => {
            store.location = {};
            store.pending.location = true;
            store.error = { status: false, message: "" };
        },
        [getLocationById.rejected]: (store, action) => {
            store.location = {};
            store.pending.location = false;
            store.error = { status: true, message: action.payload };
        },
        [getEpisodeById.fulfilled]: (store, action) => {
            store.episode = action.payload;
            store.pending.episode = false;
            store.error = { status: false, message: "" };
        },
        [getEpisodeById.pending]: (store) => {
            store.episode = {};
            store.pending.episode = true;
            store.error = { status: false, message: "" };
        },
        [getEpisodeById.rejected]: (store, action) => {
            store.episode = {};
            store.pending.episode = false;
            store.error = { status: true, message: action.payload };
        },
    },
});

const promiseReducer = promiseSlice.reducer;

export default promiseReducer;
export {getAllCharacters, getAllLocations, getAllEpisodes, getCharacterById, getEpisodeById, getLocationById};