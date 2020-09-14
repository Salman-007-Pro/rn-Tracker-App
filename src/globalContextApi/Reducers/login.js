//constants
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
import { IN_PROGRESS, SUCCESSFUL, FAILED } from "../../constants/Loader";

//initialState
const initialState = {
  uiStateSignIn: null,
  uiStateSignUp: null,
  uiStateSignOut: null,
  error: "",
  token: null,
};

//Counter Reducer
const login = (state = initialState, action) => {
  switch (action.type) {
    //Sign up
    case SIGN_UP_IN_PROGRESS:
      return {
        ...state,
        uiStateSignUp: IN_PROGRESS,
        error: "",
      };
    case SIGN_UP_SUCCESSFUL:
      return {
        ...state,
        uiStateSignUp: SUCCESSFUL,
        token: action.payload.data.token,
        error: "",
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        uiStateSignUp: FAILED,
        error: action.payload.error,
      };

    //Sign in
    case SIGN_IN_PROGRESS:
      return {
        ...state,
        uiStateSignIn: IN_PROGRESS,
        error: "",
      };
    case SIGN_IN_SUCCESSFUL:
      return {
        ...state,
        uiStateSignIn: SUCCESSFUL,
        token: action.payload.data.token,
        error: "",
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        uiStateSignIn: FAILED,
        error: action.payload.error,
      };

    // sign out
    case SIGN_OUT_IN_PROGRESS:
      return {
        ...state,
        uiStateSignOut: IN_PROGRESS,
        error: "",
      };
    case SIGN_OUT_SUCCESSFUL:
      return {
        ...state,
        uiStateSignOut: SUCCESSFUL,
        error: "",
        token: null,
      };
    case SIGN_OUT_FAILED:
      return {
        ...state,
        uiStateSignOut: FAILED,
        error: action.payload.error,
      };

    //clear error
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        error: "",
      };

    //check auth
    case CHECK_AUTHENTICATION:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
export default login;
