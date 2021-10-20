import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// components
import FormComponent from "../components/FormComponent";
import RadioInput from "../components/RadioInput";

// redux actions
import { incrementActiveStep } from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

const initialValues = {
  product: "",
};

export default function Form3() {
  const dispatch = useDispatch();
  const history = useHistory();

  // keep user on active form step
  const activeStep = useSelector((state) => state.activeStep).toString();
  useEffect(() => {
    history.push(activeStep);
  });

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
    >
      {productInputs}
    </FormComponent>
  );
}
