import { INCREMENT_ACTIVE_STEP, DECREMENT_ACTIVE_STEP } from "../constants";

export function incrementActiveStep() {
  return {
    type: INCREMENT_ACTIVE_STEP,
  };
}

export function decrementActiveStep() {
  return {
    type: DECREMENT_ACTIVE_STEP,
  };
}
