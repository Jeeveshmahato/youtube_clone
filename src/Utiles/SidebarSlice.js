import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isExpanded: false,
    },
    reducers: {
        toggleExpansion: (state) => {
            state.isExpanded =!state.isExpanded;
        },
        closeMenu: (state) => {
            state.isExpanded = false;
        }
    }
})
export const {toggleExpansion ,closeMenu} = SidebarSlice.actions;
export default SidebarSlice.reducer;