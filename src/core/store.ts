import { configureStore } from "@reduxjs/toolkit";
import keyWordsReducer from '../features/JobOffers/jobOffersSlice';

const store = configureStore({
    reducer: {
        keyWords: keyWordsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;