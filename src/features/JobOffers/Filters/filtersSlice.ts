import { createSlice } from "@reduxjs/toolkit";

interface FiltersState {
    numberOfFilters: number;
}


const filterSlice = createSlice({
    name: "filters",
    initialState: {
        numberOfFilters: 0
    } as FiltersState,

    reducers: {

    }
});

// export const selectKeyWordsState = (state: KeyWordsState) => state;
// export const SelectKeyWords = (state: KeyWordsState) => state.keyWords;

// export const { addKeyWord, removeKeyWord } = filterSlice.actions;

export default filterSlice.reducer;

