import { createSlice } from "@reduxjs/toolkit";
import { FilterItem, Filters } from "../../../core/interface";
import { Categories } from "./listItems";

interface FiltersState {
    filters: Filters[];
    checkedFilters: FilterItem[];
}

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filters: Categories,
        checkedFilters: [],
    } as FiltersState,

    reducers: {
        toggleFilterList: ({ filters }, { payload: filtersID }) => {
            const index = filters.findIndex((({ id }) => id === filtersID));
            filters[index].isExpand = !filters[index].isExpand;
        },

        addFilter: ({ checkedFilters }, { payload: checkedFilter }) => {
            checkedFilters.push(checkedFilter)
        }

    }
})

export const selectFiltersState = (state: FiltersState) => state;
export const SelectFilters = (state: FiltersState) => state.filters;

export const { toggleFilterList, addFilter } = filterSlice.actions;

export default filterSlice.reducer;

