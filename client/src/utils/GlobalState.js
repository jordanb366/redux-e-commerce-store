import React from "react";
// Import reducer
import { reducer } from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);
console.log(store);

const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};

export { StoreProvider };
