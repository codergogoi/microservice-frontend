import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  currentProduct: false,
};

const shoppingSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    landingProducts(state, action) {
      state.products = action.payload.products;
      state.categories = action.payload.categories;
    },
    productDetails(state, action) {
      state.currentProduct = action.payload;
    },
  },
});

export const { landingProducts, productDetails } = shoppingSlice.actions;
export default shoppingSlice.reducer;
