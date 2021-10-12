import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import { createFormsReducer } from "./formsReducer";

const rootReducer = combineReducers({
  activeStep: stepReducer,
  subForm1: createFormsReducer("form1"),
  subForm2: createFormsReducer("form2"),
  subForm3: createFormsReducer("form3"),
  totalForm: createFormsReducer("form"),
});

export default rootReducer;

// const rootState = {
//   activeStep: "number",
//   subForm1: {
//     data: "object w/ submitted data",
//     complete: "boolean",
//   },
//   subForm2: {
//     data: "object w/ submitted data",
//     complete: "boolean",
//   },
//   subForm3: {
//     data: "object w/ submitted data",
//     complete: "boolean",
//   },
//   form: {
//     data: "completed form with all data",
//     complete: "boolean",
//   },
// };
