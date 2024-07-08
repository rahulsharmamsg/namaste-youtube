import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name:"navslice",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
});
export const {toggleMenu} = NavSlice.actions
export default NavSlice.reducer