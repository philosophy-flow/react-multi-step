import { SUBMIT_FORM } from "../constants";

const initialState = {
  data: {},
  complete: false,
};

export function createFormsReducer(formName = "") {
  return function (state = initialState, action) {
    const name = action.name;
    if (name !== formName) return state;

    switch (action.type) {
      case SUBMIT_FORM:
        return {
          data: action.formData,
          complete: true,
        };
      default:
        return state;
    }
  };
}
