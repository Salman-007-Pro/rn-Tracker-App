//combine Reducer
import combineReducers from "../../useHook/combineReducer";

//reducers
import counter from "./counter";
import login from "./login";
import location from "./location";
import track from "./track";

export default rootReducer = combineReducers({
  counter,
  login,
  location,
  track,
});
