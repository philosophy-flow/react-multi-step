import { SUBMIT_FORM } from "../constants";

export function submitForm(formData) {
  return {
    type: SUBMIT_FORM,
    formData,
  };
}
