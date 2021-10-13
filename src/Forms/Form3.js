import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { incrementActiveStep } from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

export default function Form3() {
  const history = useHistory();
  const dispatch = useDispatch();

  const stepComplete = useSelector((state) => state.subForm3.complete);

  const activeStep = useSelector((state) => state.activeStep);
  if (activeStep === 1) {
    history.push("1");
  }

  const handleBackspace = () => {
    if (stepComplete) {
      history.push("4");
    }
  };
  useEffect(handleBackspace, [history, stepComplete]);

  const products = useSelector((state) => state.products);
  const productInputs = products.map((product) => (
    <div className="input-container" key={product.id}>
      <label>
        <Field type="radio" name="product" value={product.title} />
        {product.title}
      </label>
    </div>
  ));

  const handleSubmit = (values) => {
    dispatch(incrementActiveStep());
    dispatch(submitForm("form3", values));
    history.push("4");
  };

  return (
    <div className="Form">
      <h3>Product Selection</h3>
      <p className="product-page-info">Select your favorite product!</p>
      <Formik
        initialValues={{
          product: "",
        }}
        onSubmit={(values) => {
          if (values.product) {
            handleSubmit(values);
          }
        }}
      >
        <Form>
          <div role="group" aria-labelledby="my-radio-group">
            {productInputs}
            <ErrorMessage name="product" />
          </div>
          <button type="submit" className="form-btn">
            Next
          </button>
          <div className="refresh-warning">
            Do <span>not</span> refresh until all steps are completed, or
            progress will be lost!
          </div>
        </Form>
      </Formik>
    </div>
  );
}
