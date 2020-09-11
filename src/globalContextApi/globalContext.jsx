//main
import React, { createContext } from "react";

//rootReducer
import rootReducer from "./Reducers";

//useStore
import useStore from "../useHook/useStore";

//Actions
import { Actions } from "./Actions";

const createGlobalContext = (actions, reducers, initialState) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useStore(reducers, initialState);
    const boundActions = {};
    for (key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    const value = {
      ...state,
      ...boundActions,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};

export const { Context, Provider } = createGlobalContext(
  Actions,
  rootReducer,
  {}
);
