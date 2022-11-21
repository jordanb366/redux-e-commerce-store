import React from "react";
// Import reducer
import { reducer } from "./reducers";
// Import redux
import { createStore } from "redux";
// Import react redux
import { Provider } from "react-redux";

// Create store variable and pass in the reducer variable
const store = createStore(reducer);
// console.log(store);

// Save store provider as a variable and pass in props
const StoreProvider = (props) => {
  // Return the the Provider for react redux, pass in the store variable = store as the props
  return <Provider store={store} {...props} />;
};
// Exports the store provider variable
export { StoreProvider };
