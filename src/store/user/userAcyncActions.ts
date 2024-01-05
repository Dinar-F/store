import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { RegistrationValues, AuthValues} from "../../types/userTypes";


export const createUser = createAsyncThunk<void, RegistrationValues>(
    "user/createUser",
    async (payload, thunkApi) => {
        try {
            await fetch(`${BASE_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const logInUser = createAsyncThunk<boolean, AuthValues>(
    "user/LogInUser",
    async (payload, thunkApi) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error;
            } else {
                const loginData = await response.json();
                localStorage.setItem("authToken", JSON.stringify(loginData.access_token));
                return response.ok;
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
