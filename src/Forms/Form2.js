import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { incrementActiveStep } from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

const validate = (values) => {
  const errors = {};
  if (!values.address1) {
    errors.address1 = "Required";
  }

  if (!values.city) {
    errors.city = "Required";
  }

  if (!values.zipcode) {
    errors.zipcode = "Required";
  } else if (!/^[0-9]{5}(?:-[0-9]{4})?$/i.test(values.zipcode)) {
    errors.zipcode = "Invalid zipcode";
  }
  return errors;
};

export default function Form2() {
  const dispatch = useDispatch();
  const history = useHistory();

  const stepComplete = useSelector((state) => state.subForm2.complete);

  const activeStep = useSelector((state) => state.activeStep);
  if (activeStep === 1) {
    history.push("1");
  }

  const handleBackspace = () => {
    if (stepComplete) {
      history.push("3");
    }
  };
  useEffect(handleBackspace, [history, stepComplete]);

  const handleSubmit = (values) => {
    dispatch(incrementActiveStep());
    dispatch(submitForm("form2", values));
    history.push("3");
  };

  // const formik = useFormik({
  //   initialValues: {
  //     address1: "",
  //     address2: "",
  //     city: "",
  //     zipcode: "",
  //   },
  //   onSubmit: (values) => {
  //     handleSubmit(values);
  //   },
  //   validate,
  // });

  return (
    <Formik
      initialValues={{
        address1: "",
        address2: "",
        city: "",
        zipcode: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
      validate={validate}
    >
      <Form className="Form">
        <h3>Address Details</h3>
        <div className="input-container">
          <label htmlFor="address1">Address Line 1:</label>
          <Field id="address1" name="address1" />
          <ErrorMessage name="address1">
            {(msg) => <span className="form-error">{msg}</span>}
          </ErrorMessage>
        </div>

        <div className="input-container">
          <label htmlFor="address2">Address Line 2:</label>
          <Field id="address2" name="address2" />
        </div>

        <div className="input-container">
          <label htmlFor="city">City:</label>
          <Field id="city" name="city" />
          <ErrorMessage name="city">
            {(msg) => <span className="form-error">{msg}</span>}
          </ErrorMessage>
        </div>

        <div className="input-container">
          <label htmlFor="zipcode">Zip Code:</label>
          <Field id="zipcode" name="zipcode" />
          <ErrorMessage name="zipcode">
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
