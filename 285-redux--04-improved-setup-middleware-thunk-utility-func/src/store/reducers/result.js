import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

//for leaner convetion,  developer will have only one function in Switch, hence
// writing a delete function so that, it will minimizes code in delete Switch

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2
        })
      });
    //utility functions
    /*return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2
        })*/
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)

      return deleteResult(state, action);
    /*return {
        ...state,
        results: updatedArray
      };*/
  }
  return state;
};

export default reducer;
