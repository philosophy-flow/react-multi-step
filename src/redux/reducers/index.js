import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import { createFormsReducer } from "./formsReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  activeStep: stepReducer,
  products: productReducer,
  subForm1: createFormsReducer("form1"),
  subForm2: createFormsReducer("form2"),
  subForm3: createFormsReducer("form3"),
  totalForm: createFormsReducer("form"),
});

export default rootReducer;
