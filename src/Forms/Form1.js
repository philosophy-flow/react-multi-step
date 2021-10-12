import "./Forms.css";
import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { incrementActiveStep } from "../redux/actions/stepActions";
import { submitForm } from "../redux/actions/formActions";

export default function Form1() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    dispatch(incrementActiveStep());
    dispatch(submitForm());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="first-name">First Name:</label>
          <input id="first-name" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="last-name">Last Name:</label>
          <input id="last-name" type="text" />
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}
