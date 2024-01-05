import filterSlice from "./filter/filterSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./user/userSlice";
import profileSlice from "./user/profileSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./products/productsReduser";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        filter: filterSlice,
        cart: cartSlice,
        user: userSlice,
        profile: profileSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;