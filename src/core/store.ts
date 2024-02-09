import { configureStore } from "@reduxjs/toolkit";
import keyWordsReducer from '../features/JobOffers/FormElement/formSlice';
import filtersReducer from '../features/JobOffers/Filters/filtersSlice';

const store = configureStore({
    reducer: {
        keyWords: keyWordsReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;