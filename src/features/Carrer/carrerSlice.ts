import { createSlice } from "@reduxjs/toolkit";
import { BasicInformations } from "../../core/interface";

interface CarrerState {
    basicInformations: BasicInformations[];
}

const carrerSlice = createSlice({
    name: "carrer",
    initialState: {
        editWindow: false,
        basicInformations: {
            name: '',
            location: '',
            position: '',
            email: '',
            number: ''
        },

        workExperience: {
            position: '',
            date: '',
            company: '',
            description: ''
        },

        education: {
            school: '',
            date: '',
            profile: '',
            title: '',
        },

        languages: {
            languuage: '',
            level: '',
        },

        keyWords: [],

        courses: {
            name: '',
            date: '',
            organizer: '',
        },

        hobbies: [],

        links: {
            name: '',
            linkg: ''
        },
    },
    reducers: {

        toggleEditWindow: state => {
            state.editWindow = !state.editWindow
        },

    }
})

export const selectCarrerState = (state: CarrerState) => state;
export const SelectCarrer = (state: CarrerState) => state.basicInformations;


export const { toggleEditWindow } = carrerSlice.actions;
export default carrerSlice.reducer;