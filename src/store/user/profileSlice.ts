import { createSlice } from "@reduxjs/toolkit";
import { getProfile,updateProfile } from "./profileAcyncActions";
import { ProfileState } from "../../types/userTypes";

const profileSlice = createSlice({
    name: "profile",
    initialState: <ProfileState>{
        currentUser: null,
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, { payload }) => {
            state.currentUser = payload;
        });
        builder.addCase(updateProfile.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
            state.currentUser = payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(updateProfile.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
    }
});

export default profileSlice.reducer;