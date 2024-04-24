import { createSlice } from "@reduxjs/toolkit";
import { BasicInformations } from "../../core/interface";

interface CarrerState {
    basicInformations: BasicInformations[];
}

const carrerSlice = createSlice({
    name: "carrer",
    initialState: {
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

    }
})

export const selectCarrerState = (state: CarrerState) => state;
export const SelectCarrer = (state: CarrerState) => state.basicInformations;

export default carrerSlice.reducer;