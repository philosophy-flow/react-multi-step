import React from "react";
import { Formik, Form } from "formik";

function FormComponent(props) {
  const {
    title = "",
    initialValues = {},
    handleBack,
    activeStep,
    handleSubmit,
    validationSchema = null,
    children,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleBack={handleBack}
      onSubmit={handleSubmit}
    >
      <Form className="Form">
        <h3>{title}</h3>
        {children}
        {activeStep !== "1" && (
          <button type="button" className="form-btn" onClick={handleBack}>
            Back
          </button>
        )}
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
