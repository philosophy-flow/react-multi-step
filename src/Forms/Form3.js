import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// components
import FormComponent from "../components/FormComponent";
import RadioInput from "../components/RadioInput";

// redux actions
import {
  incrementActiveStep,
  decrementActiveStep,
} from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

export default function Form3() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activeStep = useSelector((state) => state.activeStep).toString();

  // move user to beginning of form on page refresh
  useEffect(() => {
    history.push(activeStep);
  }, [activeStep, history]);

  // see if form has been visited; if so, add values to form
  const formComplete = useSelector((state) => state.subForm3.complete);
  const formValues = useSelector((state) => state.subForm3.data);

  let initialValues;
  if (formComplete) {
    initialValues = formValues;
  } else {
    initialValues = {
      product: "",
    };
  }

  // moves user to previous form step
  const handleBack = () => {
    dispatch(decrementActiveStep());
    console.log(activeStep);
  };

  // update redux store (active step + form details), move to next form
  const handleSubmit = (values) => {
    if (values.product) {
      dispatch(incrementActiveStep());
      dispatch(submitForm("form3", values));
      history.push("4");
    }
  };

  // create array of radio inputs
  const products = useSelector((state) => state.products);
  const productInputs = products.map((product) => (
    <RadioInput key={product.id} name="product" value={product.title} />
  ));

  return (
    <FormComponent
      title="Product Selection"
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      handleBack={handleBack}
      activeStep={activeStep}
    >
      {productInputs}
    </FormComponent>
  );
}
