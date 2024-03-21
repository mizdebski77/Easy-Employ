import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from '../features/JobOffers/Filters/filtersSlice';
import keyWordsSlice from "../features/JobOffers/KeyWords/keyWordsSlice";

const store = configureStore({
    reducer: {
        keyWords: keyWordsSlice,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;