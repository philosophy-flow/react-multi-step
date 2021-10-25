import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

// components
import FormComponent from "../components/FormComponent";
import Input from "../components/TextInput";

// redux actions
import {
  incrementActiveStep,
  decrementActiveStep,
} from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

const validationSchema = Yup.object({
  address1: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  zipcode: Yup.string()
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/i, "Invalid zipcode")
    .required("Required"),
});

export default function Form2() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activeStep = useSelector((state) => state.activeStep).toString();

  // move user to beginning of form on page refresh
  useEffect(() => {
    history.push(activeStep);
  }, [activeStep, history]);

  // see if form has been visited; if so, add values to form
  const formComplete = useSelector((state) => state.subForm2.complete);
  const formValues = useSelector((state) => state.subForm2.data);

  let initialValues;
  if (formComplete) {
    initialValues = formValues;
  } else {
    initialValues = {
      address1: "",
      address2: "",
      city: "",
      zipcode: "",
    };
  }

  // moves user to previous form step
  const handleBack = () => {
    dispatch(decrementActiveStep());
    history.push("1");
  };

  // update redux store (active step + form details), move to next form
  const handleSubmit = (values) => {
    dispatch(incrementActiveStep());
    dispatch(submitForm("form2", values));
    history.push("3");
  };

  return (
    <FormComponent
      title="Address Details"
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validationSchema={validationSchema}
      handleBack={handleBack}
      activeStep={activeStep}
    >
      <Input label="Address Line 1" name="address1" />
      <Input label="Address Line 2" name="address2" required={false} />
      <Input label="City" name="city" />
      <Input label="Zip Code" name="zipcode" />
    </FormComponent>
  );
}
