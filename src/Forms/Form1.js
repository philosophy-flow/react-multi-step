import "./Form.css";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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

  // prevent user from moving backwards in form
  const stepComplete = useSelector((state) => state.subForm1.complete);
  useEffect(() => {
    if (stepComplete) {
      history.push("2");
    }
  }, [history, stepComplete]);

  const handleSubmit = (values) => {
    dispatch(incrementActiveStep());
    dispatch(submitForm("form1", values));
    history.push("2");
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form className="Form">
        <h3>Basic Details</h3>
        <div className="input-container">
          <label htmlFor="firstName">First Name:</label>
          <Field id="firstName" name="firstName" />
          <ErrorMessage name="firstName">
            {(msg) => <span className="form-error">{msg}</span>}
          </ErrorMessage>
        </div>

        <div className="input-container">
          <label htmlFor="lastName">Last Name:</label>
          <Field id="lastName" name="lastName" />
          <ErrorMessage name="lastName">
            {(msg) => <span className="form-error">{msg}</span>}
          </ErrorMessage>
        </div>

        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <Field id="email" name="email" />
          <ErrorMessage name="email">
            {(msg) => <span className="form-error">{msg}</span>}
          </ErrorMessage>
        </div>

        <button type="submit" className="form-btn">
          Next
        </button>
        <div className="refresh-warning">
          Do <span>not</span> refresh until all steps are completed, or progress
          will be lost!
        </div>
      </Form>
    </Formik>
  );
}
