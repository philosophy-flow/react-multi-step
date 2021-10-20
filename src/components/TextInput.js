import React from "react";
import { Field, ErrorMessage } from "formik";

function TextInput({ label, name, required = true }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}:</label>
      <Field id={name} name={name} />
      {required && (
        <ErrorMessage name={name}>
          {(msg) => <span className="form-error">{msg}</span>}
        </ErrorMessage>
      )}
    </div>
  );
}

export default TextInput;
