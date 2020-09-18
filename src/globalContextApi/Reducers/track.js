//constants
import {
  //create track
  CREATE_TRACK,

  //fetch_track
  FETCH_TRACK,
} from "../../constants/Actions";
//initialState
const initialState = [];

//Location Reducer
const track = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRACK:
      return [...state];

    case FETCH_TRACK:
      return [...action.payload.data];

    default:
      return [...state];
  }
};
export default track;
