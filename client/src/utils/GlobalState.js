import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
// const StoreContext = createContext();
// const { Provider } = StoreContext;

const store = Redux.createStore(useProductReducer);

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

const StoreProvider = ({ value = [], ...props }) => {
  return <Provider store={store} {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
export { StoreProvider };
