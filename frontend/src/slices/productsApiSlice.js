import { PRODUCTS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 50000,
    }),
    getProduct:builder.query({
        query: (id) => ({
          url: `${PRODUCTS_URL}/${id}`,
        }),
        keepUnusedDataFor: 5000,   
    })
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApiSlice;
