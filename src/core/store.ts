import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from '../features/JobOffers/Filters/filtersSlice';
import navigationReducer from '../common/Navigation/MobileNavbar/navigationSlice';
import carrerReducer from '../features/Carrer/carrerSlice';

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        navigation: navigationReducer,
        carrer: carrerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;