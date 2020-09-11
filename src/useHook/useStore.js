import { useReducer } from "react";
const useStore = (rootReducer, initialState = {}) => {
  const state = {
    ...initialState,
    ...rootReducer(undefined, { type: undefined }),
  };
  return useReducer(rootReducer, state);
};
export default useStore;
