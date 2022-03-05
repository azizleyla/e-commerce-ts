import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useParams } from "react-router-dom";
import { Product1 } from "../models/products.model";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product1[], void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
