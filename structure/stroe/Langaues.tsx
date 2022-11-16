import { createSlice } from "@reduxjs/toolkit";
export interface Obj {
    language: string
} 

const obj :Obj = {
    language: "en"
}
   


const language_slice = createSlice({
    name: "Langauge",
    initialState: obj,
    reducers: {
        change_language: (state, action) => {
            state.language = action.payload
        }

    }

})


export default language_slice.reducer

export const { change_language } = language_slice.actions