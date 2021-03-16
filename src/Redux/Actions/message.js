import { SET_MESSAGE, CLEAR_MESSAGE } from "../Types";

export const setMessage = (errors) => ({
  type: SET_MESSAGE,
  payload: errors,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
