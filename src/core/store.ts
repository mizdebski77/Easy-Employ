import { configureStore } from "@reduxjs/toolkit";
import keyWordsReducer from '../features/JobOffers/FormElement/keyWordsSlice';

const store = configureStore({
    reducer: {
        keyWords: keyWordsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;