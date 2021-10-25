import "./Form.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// components
import FormComponent from "../components/FormComponent";
import Input from "../components/TextInput";

// redux actions
import { incrementActiveStep } from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function Form1() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activeStep = useSelector((state) => state.activeStep).toString();

  // see if form has been visited; if so, add values to form
  const formComplete = useSelector((state) => state.subForm1.complete);
  const formValues = useSelector((state) => state.subForm1.data);

  let initialValues;
  if (formComplete) {
    initialValues = formValues;
  } else {
    initialValues = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  // update redux store (active step + form details), move to next form
  const handleSubmit = (values) => {
    dispatch(incrementActiveStep());
    dispatch(submitForm("form1", values));
    history.push("2");
  };

  return (
    <FormComponent
      title="Basic Details"
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validate={validate}
      activeStep={activeStep}
    >
      <Input label="First Name" name="firstName" />
      <Input label="Last Name" name="lastName" />
      <Input label="Email" name="email" />
    </FormComponent>
  );
}
