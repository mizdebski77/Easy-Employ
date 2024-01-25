import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "../../../core/interface";

interface FiltersState {
    filters: Filters[];
}


const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filters: []
    } as FiltersState,

    reducers: {
        toggleFilter: ({ filters }, { payload: filterID }) => {
            const index = filters.findIndex(({ id }) => id === filterID);
            filters[index].isExpand = !filters[index].isExpand
        },
    }
});

export const selectFiltersState = (state: FiltersState) => state;
export const SelectFilters = (state: FiltersState) => state.filters;

export const { toggleFilter } = filterSlice.actions;

export default filterSlice.reducer;

