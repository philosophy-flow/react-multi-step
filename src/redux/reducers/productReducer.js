import { SET_PRODUCTS } from "../constants";

export function productReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.data;
    default:
      return state;
  }
}
