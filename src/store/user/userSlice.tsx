import { createSlice } from "@reduxjs/toolkit";
import { createUser, logInUser } from "./userAcyncActions";
import { FORM_TYPE } from "../../constants";
import { UserState } from "../../types/userTypes";

const initialState: UserState = {
    showForm: false,
    showFormType: FORM_TYPE.LOG_IN,
    registration: {
        isSuccess: false,
        isError: false,
    },
    logIn: {
        isLoading: false,
        isAuth: false,
        isError: false,
    }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleForm: (state, action) => {
            state.showForm = action.payload;
        },
        toggleFormType: (state, action) => {
            state.showFormType = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state) => {
            state.showFormType = FORM_TYPE.LOG_IN;
        });
        builder.addCase(createUser.rejected, (state) => {
            state.registration.isError = true;
        });
        builder.addCase(logInUser.pending, (state) => {
            state.logIn.isLoading = true;
        });
        builder.addCase(logInUser.fulfilled, (state, { payload }) => {
            state.logIn.isLoading = false;
            state.logIn.isAuth = payload;
            state.showForm = false;
        });
        builder.addCase(logInUser.rejected, (state) => {
            state.logIn.isLoading = false;
            state.logIn.isError = true;
        });
    }
});

export const { toggleForm, toggleFormType } = userSlice.actions;
export default userSlice.reducer;