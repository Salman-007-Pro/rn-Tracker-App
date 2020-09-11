import { ADD_COUNTER, DEL_COUNTER } from "../../constants/Counter";

//add counter
export const getAddCounter = (dispatch) => {
  return async () => {
    try {
      dispatch(addCounterSuccessful());
    } catch (error) {
      console.log(error);
    }
  };
};
const addCounterSuccessful = () => {
  return {
    type: ADD_COUNTER,
  };
};

//del counter
export const getDelCounter = (dispatch) => {
  return async () => {
    try {
      dispatch(delCounterSuccessful());
    } catch (error) {
      console.log(error);
    }
  };
};
const delCounterSuccessful = () => {
  return {
    type: DEL_COUNTER,
  };
};
