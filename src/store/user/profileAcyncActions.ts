import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { UserData, UpdateValuesType } from "../../types/userTypes";

export const updateProfile = createAsyncThunk<UserData, UserData | UpdateValuesType>(
    "user/updateProfile",
    async (payload, thunkApi) => {
        try {
            const result = await fetch(`${BASE_URL}/users/${payload.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify({
                    "name": payload.name,
                    "email": payload.email,
                    "avatar": payload.avatar,
                })
            });
            const data = await result.json();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const getProfile = createAsyncThunk<UserData>(
    "user/profile",
    async () => {
        const authToken = JSON.parse(localStorage.getItem("authToken") || "");
        const profile = await fetch(`${BASE_URL}/auth/profile`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            },
        });
        if (!profile.ok) return;
        const data = await profile.json();
        return data;
    });
