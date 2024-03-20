import { createSlice } from "@reduxjs/toolkit";
import { KeyWords } from "../../../core/interface";

interface searchFiltersState {
    keyWords: KeyWords[];
    distance: number;
    location: string;
}

const searchFiltersSlice = createSlice({
    name: "searchFilters",
    initialState: {
        keyWords: [],
        distance: 0,
        location: ''
    } as searchFiltersState,

    reducers: {

        setSearchFilters: (state, action) => {
            state.distance = action.payload.distance;
            state.location = action.payload.location;
        },

        addKeyWord: ({ keyWords }, { payload: keyWord }) => {
            keyWords.push(keyWord)
        },

        removeKeyWord: ({ keyWords }, { payload: keyWordID }) => {
            const index = keyWords.findIndex((({ id }) => id === keyWordID));
            keyWords.splice(index, 1);
        },
    }
});

export const selectSearchFiltersState = (state: searchFiltersState) => state;
export const SelectSearchFilters = (state: searchFiltersState) => state;

export const { addKeyWord, removeKeyWord, setSearchFilters } = searchFiltersSlice.actions;

export default searchFiltersSlice.reducer;

