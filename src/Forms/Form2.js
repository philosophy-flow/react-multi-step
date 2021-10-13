import React from "react";
import { useFormik } from "formik";
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

  const activeStep = useSelector((state) => state.activeStep);
  if (activeStep === 1) {
    history.push("1");
  }

  const handleSubmit = (values) => {
    dispatch(incrementActiveStep());
    dispatch(submitForm("form2", values));
    history.push("3");
  };

  const formik = useFormik({
    initialValues: {
      address1: "",
      address2: "",
      city: "",
      zipcode: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validate,
  });

  return (
    <div className="Form">
      <h3>Address Details</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label htmlFor="address1">Address Line 1:</label>
          <input
            id="address1"
            name="address1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address1}
            placeholder="Primary address"
          />
          {formik.touched.address1 && formik.errors.address1 ? (
            <div className="form-error">{formik.errors.address1}</div>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="address2">Address Line 2:</label>
          <input
            id="address2"
            name="address2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address2}
            placeholder="Apartment, unit, etc."
          />
          {formik.touched.address2 && formik.errors.address2 ? (
            <div className="form-error">{formik.errors.address2}</div>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="form-error">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            id="zipcode"
            name="zipcode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipcode}
          />
          {formik.touched.zipcode && formik.errors.zipcode ? (
            <div className="form-error">{formik.errors.zipcode}</div>
          ) : null}
        </div>

        <button type="submit" className="form-btn">
          Next
        </button>
      </form>
      <div className="refresh-warning">
        Do <span>not</span> refresh until all steps are completed, or progress
        will be lost!
      </div>
    </div>
  );
}
