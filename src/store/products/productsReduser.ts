import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType, CategoryType } from "../../types/productTypes";
import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../constants";
import { SearchTitleType, FilterState } from "../../types/filterTypes";

export const productApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["Categories", "Product", "Products"],
    endpoints: (builder) => ({
        getCategories: builder.query<CategoryType[], void>({
            query: () => "categories/",
            providesTags: ["Categories"],
        }),
        getProducts: builder.query<ProductType[], FilterState | SearchTitleType>({
            query: (params) => buildUrl("/products/", params),
            providesTags: ["Products"],
        }),
        getProduct: builder.query<ProductType, string>({
            query: (id) => `products/${id}`,
            providesTags: ["Product"],
        })
    })
});

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery } = productApi;