import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product1 } from "../../../models/products.model";
export interface CartItemType {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
}
interface Cart {
  cartItems: CartItemType[];
}

// Define the initial state using that type
const initialState: Cart = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const { title } = action.payload;
      let newProduct = {
        title: title,
      };
      state.cartItems = [...state.cartItems, newProduct];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
