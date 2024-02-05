import { createSlice } from "@reduxjs/toolkit";
import { FilterItem, Filters } from "../../../core/interface";
import { Categories } from "./listItems";
import { Items } from "./items";

interface FiltersState {
    filters: Filters[];
    checkedFilters: FilterItem[];
}

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filters: Categories,
        checkedFilters: Categories.flatMap(category => category.items),
    } as FiltersState,

    reducers: {
        toggleFilterList: ({ filters }, { payload: filtersID }) => {
            const index = filters.findIndex((({ id }) => id === filtersID));
            filters[index].isExpand = !filters[index].isExpand;
        },

        switchFilterCheck: ({ checkedFilters }, { payload: filterID }) => {
            const index = checkedFilters.findIndex((({ id }) => id === filterID));
            checkedFilters[index].checked = !checkedFilters[index].checked;
        },

    }
})

export const selectFiltersState = (state: FiltersState) => state;
export const SelectFilters = (state: FiltersState) => state.filters;

export const { toggleFilterList, switchFilterCheck } = filterSlice.actions;

export default filterSlice.reducer;

