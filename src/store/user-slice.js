import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user: {}, // {id: // token: //}
  profile: {}, //
  wishlist: [],
  cart: [],
  orders: [],
};

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
    },
    userSignup(state, action) {
      state.user = action.payload;
    },
    userProfile(state, action) {
      state.profile = action.payload;
      state.wishlist = action.payload.wishlist;
      state.cart = action.payload.cart;
      state.address = action.payload.address;
      state.orders = action.payload.orders;
    },
    addNewAddress(state, action) {
      state.address = action.payload.address;
    },
    addToWishlist(state, action) {
      state.wishlist = state.wishlist.length
        ? [...state.wishlist, action.payload]
        : [action.payload];
    },
    removeFromWishlist(state, action) {
      if (state.wishlist.length) {
        const existWishlist = state.wishlist.filter(
          (item) => item._id !== action.payload._id
        );
        state.wishlist = existWishlist;
      } else {
        state.wishlist = [];
      }
    },
    addToCart(state, action) {
      let existingCart = state.cart;

      if (existingCart.length) {
        const existItem = existingCart.filter(
          ({ product }) => product._id === action.payload.product._id
        );

        if (existItem.length) {
          const index = existingCart.indexOf(existItem[0]);
          existingCart[index] = action.payload;

          state.cart = existingCart;
        } else {
          state.cart = [...state.cart, action.payload];
        }
      } else {
        state.cart = [action.payload];
      }
    },
    removeFromCart(state, action) {
      let currentCart = state.cart;
      if (currentCart.length) {
        const existItem = currentCart.filter(
          ({ product }) => product._id !== action.payload.product._id
        );

        state.cart = existItem;
      } else {
        state.cart = [];
      }
    },
    placeOrder(state, action) {
      state.orders = [action.payload, ...state.orders];
      state.cart = [];
    },
  },
});

export const {
  userLogin,
  userSignup,
  userProfile,
  addNewAddress,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  placeOrder,
} = userSlice.actions;
export default userSlice.reducer;
