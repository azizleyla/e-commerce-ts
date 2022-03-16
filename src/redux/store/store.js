import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "../../services/ProductsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/products/ProductSlice";
const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
export default store;

setupListeners(store.dispatch);
