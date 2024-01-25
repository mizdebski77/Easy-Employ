import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "../../../core/interface";
import { Categories } from "./listItems";

interface FiltersState {
    filters: Filters[];
    filtersList: number;
}


const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filters: Categories,
        filtersList: 0,
    } as FiltersState,

    reducers: {
        toggleFilterList: ({ filters }, { payload: filtersID }) => {
            const index = filters.findIndex((({ id }) => id === filtersID));
            filters[index].isExpand = !filters[index].isExpand;
        },

        incrementFiltersList: (state) => {
            state.filtersList += 1;
        },

        decrementFiltersList: (state) => {
            state.filtersList -= 1;
        },



    }
})

export const selectFiltersState = (state: FiltersState) => state;
export const SelectFilters = (state: FiltersState) => state.filters;
export const SelectFiltersList = (state: FiltersState) => state.filtersList;

export const { toggleFilterList, incrementFiltersList, decrementFiltersList } = filterSlice.actions;

export default filterSlice.reducer;

