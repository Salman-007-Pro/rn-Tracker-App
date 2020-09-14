//combine Reducer
import combineReducers from "../../useHook/combineReducer";

//reducers
import counter from "./counter";
import login from "./login";

export default rootReducer = combineReducers({
  counter,
  login,
});
