import "./Sidebar.css";
import React from "react";
import { useSelector } from "react-redux";

// bring in active selection from redux to show user what step of the form they are on

export default function Sidebar() {
  const activeStep = useSelector((state) => state.activeStep);
  const step1Complete = useSelector((state) => state.subForm1.complete);
  const step2Complete = useSelector((state) => state.subForm2.complete);
  const step3Complete = useSelector((state) => state.subForm3.complete);
  const step4Complete = useSelector((state) => state.totalForm.complete);

  return (
    <div className="Sidebar">
      <h2>Product Survey</h2>
      <nav>
        <ul>
          <li className="form-step">
            <span>Basic Details</span>
            <span
              className={`status-circle ${activeStep === 1 && "active"}
              ${step1Complete && "step-complete"}`}
            ></span>
          </li>
          <li className="form-step">
            <span>Address Details </span>
            <span
              className={`status-circle ${activeStep === 2 && "active"} ${
                step2Complete && "step-complete"
              }`}
            ></span>
          </li>
          <li className="form-step">
            <span>Product Selection </span>
            <span
              className={`status-circle ${activeStep === 3 && "active"} ${
                step3Complete && "step-complete"
              }`}
            ></span>
          </li>
          <li className="form-step">
            Review
            <span
              className={`status-circle ${activeStep === 4 && "active"} ${
                step4Complete && "step-complete"
              } `}
            ></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
