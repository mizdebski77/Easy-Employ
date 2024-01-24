import { configureStore } from "@reduxjs/toolkit";
import keyWordsReducer from '../features/JobOffers/jobOffersSlice';

const store = configureStore({
    reducer: {
        keyWords: keyWordsReducer,
    },
});

export default store;