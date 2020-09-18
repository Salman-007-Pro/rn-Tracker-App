//constants
import {
  //start recording
  START_RECORDING,

  //stop recording
  STOP_RECORDING,

  //add current location
  ADD_CURRENT_LOCATION,

  //add location
  ADD_LOCATION,

  //change name
  CHANGED_NAME,

  //reset name and locations
  RESET,
} from "../../constants/Actions";
//initialState
const initialState = {
  recording: false,
  locations: [],
  currentLocation: null,
  name: "",
};

//Location Reducer
const location = (state = initialState, action) => {
  switch (action.type) {
    case START_RECORDING:
      return {
        ...state,
        recording: true,
      };
    case STOP_RECORDING:
      return {
        ...state,
        recording: false,
      };
    case ADD_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload.location,
      };
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload.location],
      };
    case CHANGED_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case RESET:
      return {
        ...state,
        locations: [],
        name: "",
      };
    default:
      return {
        ...state,
      };
  }
};
export default location;
