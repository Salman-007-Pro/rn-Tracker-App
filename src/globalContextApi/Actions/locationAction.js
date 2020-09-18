import {
  //clear error message
  CLEAR_ERROR_MESSAGE,

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

// Api
import tracker from "../../serverApi/tracker";

//Async Storage
import { AsyncStorage } from "react-native";

//navigate
import { navigate } from "../../navigationRef";

//start recording
export const getStartRecording = (dispatch) => {
  return async () => {
    try {
      dispatch(startRecording());
    } catch (err) {
      return err;
    }
  };
};
const startRecording = () => {
  return {
    type: START_RECORDING,
  };
};

//stop recording
export const getStopRecording = (dispatch) => {
  return async () => {
    try {
      dispatch(stopRecording());
    } catch (err) {
      return err;
    }
  };
};
const stopRecording = () => {
  return {
    type: STOP_RECORDING,
  };
};

//add location
export const getAddLocation = (dispatch) => {
  return async (location, recording) => {
    try {
      dispatch(addCurrentlocation(location));
      if (recording) {
        dispatch(addlocation(location));
      }
    } catch (err) {
      return err;
    }
  };
};
const addCurrentlocation = (location) => {
  return {
    type: ADD_CURRENT_LOCATION,
    payload: {
      location,
    },
  };
};
const addlocation = (location) => {
  return {
    type: ADD_LOCATION,
    payload: {
      location,
    },
  };
};

//change Name
export const getChangeName = (dispatch) => {
  return async (name) => {
    try {
      dispatch(changeName(name));
    } catch (err) {
      return err;
    }
  };
};
const changeName = (name) => {
  return {
    type: CHANGED_NAME,
    payload: {
      name,
    },
  };
};

//change Name
export const getReset = (dispatch) => {
  return async () => {
    try {
      dispatch(Reset());
      navigate("TrackList");
    } catch (err) {
      return err;
    }
  };
};
const Reset = () => {
  return {
    type: RESET,
  };
};
