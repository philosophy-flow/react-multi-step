import React from "react";
import { Formik, Form } from "formik";

function FormComponent(props) {
  const {
    title = "",
    initialValues = {},
    handleSubmit,
    validate = null,
    children,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form className="Form">
        <h3>{title}</h3>
        {children}
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

export default FormComponent;
