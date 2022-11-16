import { createSlice } from "@reduxjs/toolkit";
export interface Obj {
    Color: boolean
} 

const obj :Obj = {
    Color: false,
}


const dark_slice = createSlice({
    name: "Dark",
    initialState: obj,
    reducers: {
        change_color: (state, action) => {
            state.Color = action.payload
        }

    }

})


export default dark_slice.reducer

export const { change_color } = dark_slice.actions