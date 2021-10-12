import "./Form.css";
import React from "react";
import { useFormik } from "formik";
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

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(incrementActiveStep());
    dispatch(submitForm("form1", values));
    history.push("2");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validate,
  });

  return (
    <div className="Form">
      <h3>Basic Details</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="form-error">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="form-error">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="form-error">{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit" className="form-btn">
          Next
        </button>
        <div className="refresh-warning">
          Do <span>not</span> refresh until all steps are completed, or progress
          will be lost!
        </div>
      </form>
    </div>
  );
}
