import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "../../services/ProductsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
export default store;

setupListeners(store.dispatch);
