const combineReducer = (reducerDict) => {
  const initialState = getInitialState(reducerDict);
  return (state = initialState, action) =>
    Object.keys(reducerDict).reduce((acc, cur) => {
      const slice = reducerDict[cur](state[cur], action);
      return { ...acc, [cur]: slice };
    }, state);
};
export default combineReducer;

const getInitialState = (reducerDict) => {
  return Object.keys(reducerDict).reduce((acc, curr) => {
    const slice = reducerDict[curr](undefined, { type: undefined });
    return { ...acc, [curr]: slice };
  }, {});
};
