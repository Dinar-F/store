import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productTypes";
import { CartState } from "../../types/cartTypes";

const initialState: CartState = {
    cartList: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductType>) => {
            const findItem = state.cartList.find((item) => item.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.cartList.push({
                    ...action.payload,
                    count: 1,
                });
            }
        },
        reduceItem: (state, action: PayloadAction<number>) => {
            const findItem = state.cartList.find((item) => item.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.cartList = state.cartList.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addItem, reduceItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;