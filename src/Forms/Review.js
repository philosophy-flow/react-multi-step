import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { submitForm } from "../redux/actions/formActions";

export default function Review() {
  const history = useHistory();
  const dispatch = useDispatch();

  // keep user on active form step
  const activeStep = useSelector((state) => state.activeStep).toString();
  useEffect(() => {
    history.push(activeStep);
  });

  // bring in data from sub forms
  const form1Data = useSelector((state) => state.subForm1.data);
  const form2Data = useSelector((state) => state.subForm2.data);
  const form3Data = useSelector((state) => state.subForm3.data);

  const handleFinalSubmission = (e) => {
    e.preventDefault();
    const formData = {
      ...form1Data,
      ...form2Data,
      ...form3Data,
    };
    console.log(formData);
    dispatch(submitForm("form", formData));
    alert("Thanks for participating in the survey!");
    setTimeout(() => {
      window.location.reload(true);
    }, 2000);
  };

  return (
    <form className="Form" onSubmit={handleFinalSubmission}>
      <h3>Review</h3>
      <p>You're almost there! Please review your details below.</p>

      <div className="review-details">
        <p>
          First Name: <span>{form1Data.firstName}</span>
        </p>
        <p>
          Last Name: <span>{form1Data.lastName}</span>
        </p>
        <p>
          Email: <span>{form1Data.email}</span>
        </p>
        <p>---</p>
        <p>
          Address Line 1: <span>{form2Data.address1}</span>
        </p>
        <p>
          Address Line 2: <span>{form2Data.address2}</span>
        </p>
        <p>
          City: <span>{form2Data.city}</span>
        </p>
        <p>
          Zip Code: <span>{form2Data.zipcode}</span>
        </p>
        <p>---</p>
        <p>
          Product Selection: <span>{form3Data.product}</span>
        </p>
      </div>
      <button className="form-btn" type="submit">
        Submit Form
      </button>
    </form>
  );
}
