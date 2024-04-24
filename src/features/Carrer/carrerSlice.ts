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
        }
    },
    reducers: {

    }
})

export const selectCarrerState = (state: CarrerState) => state;
export const SelectCarrer = (state: CarrerState) => state.basicInformations;

export default carrerSlice.reducer;