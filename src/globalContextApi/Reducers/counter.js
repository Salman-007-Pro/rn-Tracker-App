//constants
import { ADD_COUNTER, DEL_COUNTER } from "../../constants/Counter";

//initialState
const initialState = 0;

//Counter Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state + 1;
    case DEL_COUNTER:
      return state - 1;
    default:
      return state;
  }
};
export default counter;
