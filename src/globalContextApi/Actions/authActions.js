import {
  //signup
  SIGN_UP_IN_PROGRESS,
  SIGN_UP_SUCCESSFUL,
  SIGN_UP_FAILED,

  //signIn
  SIGN_IN_PROGRESS,
  SIGN_IN_SUCCESSFUL,
  SIGN_IN_FAILED,

  //signOut
  SIGN_OUT_IN_PROGRESS,
  SIGN_OUT_SUCCESSFUL,
  SIGN_OUT_FAILED,

  //clear error message
  CLEAR_ERROR_MESSAGE,

  //check auth
  CHECK_AUTHENTICATION,
} from "../../constants/Actions";

// Api
import tracker from "../../serverApi/tracker";

//Async Storage
import { AsyncStorage } from "react-native";

//navigate
import { navigate } from "../../navigationRef";

//Sign Up
export const getSignUp = (dispatch) => {
  return async ({ email, password }) => {
    dispatch(signUpInProgress());
    try {
      const response = await tracker.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch(signUpSuccessful(response.data));
      navigate("TrackList");
    } catch (err) {
      dispatch(signUpFailed("Something went wrong with sign up"));
      return err;
    }
  };
};
const signUpInProgress = () => {
  return {
    type: SIGN_UP_IN_PROGRESS,
  };
};
const signUpSuccessful = (data) => {
  return {
    type: SIGN_UP_SUCCESSFUL,
    payload: {
      data,
    },
  };
};
const signUpFailed = (error) => {
  return {
    type: SIGN_UP_FAILED,
    payload: {
      error: error,
    },
  };
};

//Sign In
export const getSignIn = (dispatch) => {
  return async ({ email, password }) => {
    dispatch(signInProgress());
    try {
      const response = await tracker.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch(signInSuccessful(response.data));
      navigate("TrackList");
    } catch (err) {
      dispatch(signInFailed("Something went wrong with sign in"));
      return err;
    }
  };
};
const signInProgress = () => {
  return {
    type: SIGN_IN_PROGRESS,
  };
};
const signInSuccessful = (data) => {
  return {
    type: SIGN_IN_SUCCESSFUL,
    payload: {
      data,
    },
  };
};
const signInFailed = (error) => {
  return {
    type: SIGN_IN_FAILED,
    payload: {
      error: error,
    },
  };
};

//Sign Out
export const getSignOut = (dispatch) => {
  return async () => {
    dispatch(signOutInProgress());
    try {
      await AsyncStorage.removeItem("token");
      dispatch(signOutSuccessful());
      navigate("loginFlow");
    } catch (err) {
      dispatch(signOutFailed("Something went wrong in sign out"));
      return err;
    }
  };
};
const signOutInProgress = () => {
  return {
    type: SIGN_OUT_IN_PROGRESS,
  };
};
const signOutSuccessful = () => {
  return {
    type: SIGN_OUT_SUCCESSFUL,
  };
};
const signOutFailed = (error) => {
  return {
    type: SIGN_OUT_FAILED,
    payload: {
      error,
    },
  };
};

//clear message
export const getClearErrorMessage = (dispatch) => {
  return async () => {
    dispatch(ClearErrorMessageSuccessful());
  };
};
const ClearErrorMessageSuccessful = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};

//resolve Authication
export const checkAuthentication = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch(checkAuthSuccessful(token));
      navigate("TrackList");
    } else {
      navigate("loginFlow");
    }
  };
};
const checkAuthSuccessful = (token) => {
  return {
    type: CHECK_AUTHENTICATION,
    payload: {
      token,
    },
  };
};
