import React from "react";
import { Field } from "formik";

function RadioInput({ name, value }) {
  return (
    <div className="input-container" key={value}>
      <label>
        <Field type="radio" name={name} value={value} />
        {value}
      </label>
    </div>
  );
}

export default RadioInput;
