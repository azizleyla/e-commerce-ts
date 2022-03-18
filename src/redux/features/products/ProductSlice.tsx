import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product1 } from "../../../models/products.model";

// export interface CartItemType {
//   id: number | undefined;
//   title?: string | undefined;
//   image: string;
//   price: number;
//   amount: number;
// }
interface ProductCart {
  cartItems: Product1[];
}

// Define the initial state using that type
const initialState: ProductCart = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product1>) => {
      const { id, title, image, price, description } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      } else {
        let newProduct = {
          id,
          title,
          image,
          price,
          amount: 1,
          description,
        };
        state.cartItems = [...state.cartItems, newProduct];
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
      state.cartItems = newCartItems;
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
