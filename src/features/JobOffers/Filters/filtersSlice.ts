import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "../../../core/interface";
import { Categories } from "./listItems";

interface FiltersState {
    filters: Filters[];
}


const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filters: Categories,
    } as FiltersState,

    reducers: {
        toggleFilter: ({ filters }, { payload: filtersID }) => {
            const index = filters.findIndex((({ id }) => id === filtersID));
            filters[index].isExpand = !filters[index].isExpand;
        },
    }
});

export const selectFiltersState = (state: FiltersState) => state;
export const SelectFilters = (state: FiltersState) => state.filters;

export const { toggleFilter } = filterSlice.actions;

export default filterSlice.reducer;
