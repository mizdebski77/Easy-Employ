import { createSlice } from "@reduxjs/toolkit";
import {  KeyWords } from "../../../core/interfaces";

interface KeyWordsState {
    keyWords: KeyWords[];
}

const keyWordsSlice = createSlice({
    name: "keyWords",
    initialState: {
        keyWords: [],
    } as KeyWordsState,

    reducers: {
        addKeyWord: ({ keyWords }, { payload: keyWord }) => {
            keyWords.push(keyWord)
        },

        removeKeyWord: ({ keyWords }, { payload: keyWordID }) => {
            const index = keyWords.findIndex((({ id }) => id === keyWordID));
            keyWords.splice(index, 1);
        }

    }
});

export const selectKeyWordsState = (state: KeyWordsState) => state;
export const SelectKeyWords = (state: KeyWordsState) => state.keyWords;

export const { addKeyWord, removeKeyWord } = keyWordsSlice.actions;

export default keyWordsSlice.reducer;

