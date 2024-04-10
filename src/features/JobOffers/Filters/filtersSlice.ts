import { createSlice } from "@reduxjs/toolkit";
import { FilterItem, Filters } from "../../../core/interface";
import { Categories } from "../../../core/arrays";

interface FiltersState {
    filters: Filters[];
    checkedFiltersCount: number;
}

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filters: Categories,
        checkedFiltersCount: 0,
    } as FiltersState,

    reducers: {
        toggleFilterList: ({ filters }, { payload: filtersID }) => {
            const index = filters.findIndex((({ id }) => id === filtersID));
            filters[index].isExpand = !filters[index].isExpand;
        },

        toggleFilterChecked: (state, { payload: filterID }) => {
            state.filters.forEach(filter => {
                const item = filter.items.find(item => item.id === filterID);
                if (item) {
                    item.checked = !item.checked;
                    state.checkedFiltersCount += item.checked ? 1 : -1;
                }
            });
        },
    }
})

export const selectFiltersState = (state: FiltersState) => state;
export const SelectFilters = (state: FiltersState) => state.filters;

export const { toggleFilterList, toggleFilterChecked } = filterSlice.actions;

export default filterSlice.reducer;

