import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

// components
import FormComponent from "../components/FormComponent";
import RadioInput from "../components/RadioInput";

// redux actions
import {
  incrementActiveStep,
  decrementActiveStep,
} from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

const validationSchema = Yup.object({
  product: Yup.string().required("Select a product"),
});

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
    history.push("2");
  };

  // update redux store (active step + form details), move to next form
  const handleSubmit = (values) => {
    dispatch(incrementActiveStep());
    dispatch(submitForm("form3", values));
    history.push("4");
  };

  // create a radio group
  const products = useSelector((state) => state.products);
  const radioGroup = () => (
    <div style={{ marginBottom: "1rem" }}>
      {products.map((product) => (
        <RadioInput key={product.id} name="product" value={product.title} />
      ))}
      <ErrorMessage name="product">
        {(msg) => <span className="form-error">{msg}</span>}
      </ErrorMessage>
    </div>
  );

  return (
    <FormComponent
      title="Product Selection"
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      handleBack={handleBack}
      activeStep={activeStep}
      validationSchema={validationSchema}
    >
      {radioGroup()}
    </FormComponent>
  );
}
