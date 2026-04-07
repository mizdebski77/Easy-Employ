import { createSlice } from "@reduxjs/toolkit";

interface Navigation {
    mobileNavigation: boolean;
    languageWindow: boolean;
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        mobileNavigation: false,
        languageWindow: false,
    } as Navigation,

    reducers: {

        toggleMobileNavigation: state => {
            state.mobileNavigation = !state.mobileNavigation
        },

        toggleLanguageWindow: state => {
            state.languageWindow = !state.languageWindow
        },

    }
})

export const selectNavigationState = (state: Navigation) => state;

export const { toggleMobileNavigation, toggleLanguageWindow } = navigationSlice.actions;
export default navigationSlice.reducer;