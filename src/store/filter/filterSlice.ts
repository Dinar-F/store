import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState, PriceValues } from "../../types/filterTypes";

const initialState: FilterState = {
    limit: 10,
    offset: 0,
    categoryId: 0,
    title: "",
    price_min: "",
    price_max: "",
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
            state.offset = initialState.offset;
        },
        setSearchTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
            state.offset = initialState.offset;
        },
        setSearchPrice(state, action: PayloadAction<PriceValues>) {
            state.price_min = action.payload.price_min;
            state.price_max = action.payload.price_max;
            state.offset = initialState.offset;
        },
        removeFilters(state) {
            state.title = initialState.title;
            state.price_min = initialState.price_min;
            state.price_max = initialState.price_max;
            state.offset = initialState.offset;
        },
        setLimit(state) {
            state.limit = state.limit + initialState.limit;
        },
        setOffset(state, action: PayloadAction<number>) {
            state.offset = action.payload;
        },
    }
});

export const {
    setCategoryId,
    setSearchTitle,
    setSearchPrice,
    removeFilters,
    setLimit,
    setOffset } = filterSlice.actions;

export default filterSlice.reducer;