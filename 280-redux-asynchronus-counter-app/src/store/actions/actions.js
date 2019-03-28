export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";
export const MULTIPLY = "MULTIPLY";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    val: value
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    val: value
  };
};

export const multiply = value => {
  return {
    type: MULTIPLY,
    val: value
  };
};

export const saveResult = res => {
  return {
    type: STORE_RESULT,
    result: res
  };
};

//Asynchronus code in Redux
export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElid: id
  };
};
