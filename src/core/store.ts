import { configureStore } from "@reduxjs/toolkit";
import searchFiltersReducer from '../features/JobOffers/FormElement/formSlice';
import filtersReducer from '../features/JobOffers/Filters/filtersSlice';

const store = configureStore({
    reducer: {
        searchFilters: searchFiltersReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;