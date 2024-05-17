import { store } from "./index";
import { Provider } from "react-redux";
import React from "react";

export const Providers = ({ children }) => {
  return React.createElement(Provider, { store: store }, children);
};
