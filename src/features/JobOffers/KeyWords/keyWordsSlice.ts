import { createSlice } from "@reduxjs/toolkit";
import { KeyWords } from "../../../core/interface";

interface keyWordsState {
    keyWords: KeyWords[];
}

const keyWordsSlice = createSlice({
    name: "keyWords",
    initialState: {
        keyWords: [],
    } as keyWordsState,

    reducers: {
        addKeyWord: ({ keyWords }, { payload: keyWord }) => {
            keyWords.push(keyWord)
        },

        removeKeyWord: ({ keyWords }, { payload: keyWordID }) => {
            const index = keyWords.findIndex((({ id }) => id === keyWordID));
            keyWords.splice(index, 1);
        },
    }
});

export const selectKeyWordsState = (state: keyWordsState) => state;
export const SelectSearchFilters = (state: keyWordsState) => state.keyWords;

export const { addKeyWord, removeKeyWord } = keyWordsSlice.actions;

export default keyWordsSlice.reducer;

