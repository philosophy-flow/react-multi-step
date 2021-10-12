import { INCREMENT_ACTIVE_STEP, DECREMENT_ACTIVE_STEP } from "../constants";

const initialState = 1;

export default function stepReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_ACTIVE_STEP:
      return state + 1;
    case DECREMENT_ACTIVE_STEP:
      return state - 1;
    default:
      return state;
  }
}
