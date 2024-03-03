import { RootState } from "./store";
import { ProductType } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: ProductType[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCart = (state: RootState) => state.cart.cart;
export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
