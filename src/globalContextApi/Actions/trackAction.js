//constants
import {
  //create track
  CREATE_TRACK,

  //fetch_track
  FETCH_TRACK,
} from "../../constants/Actions";
// Api
import tracker from "../../serverApi/tracker";

//Async Storage
import { AsyncStorage } from "react-native";

//navigate
import { navigate } from "../../navigationRef";

//create track
export const getCreateTrack = (dispatch) => {
  return async (name, locations) => {
    try {
      await tracker.post("/track", { name, locations });
    } catch (err) {
      return err;
    }
  };
};

//get tracks
export const getFetchTrack = (dispatch) => {
  return async () => {
    try {
      const response = await tracker.get("/track");
      dispatch(FetchTrack(response.data));
    } catch (err) {
      return err;
    }
  };
};
const FetchTrack = (data) => {
  return {
    type: FETCH_TRACK,
    payload: {
      data,
    },
  };
};
