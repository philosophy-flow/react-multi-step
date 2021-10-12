import { SUBMIT_FORM } from "../constants";

export function submitForm(name, formData) {
  return {
    type: SUBMIT_FORM,
    name,
    formData,
  };
}
