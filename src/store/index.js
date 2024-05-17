import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./user-slice";
import shoppingReducer from "./shpping-slice";

export const store = configureStore({
  reducer: {
    userReducer,
    shoppingReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
