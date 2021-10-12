import "./Sidebar.css";
import React from "react";
import { useSelector } from "react-redux";

// bring in active selection from redux to show user what step of the form they are on

export default function Sidebar() {
  const activeStep = useSelector((state) => state.activeStep);

  return (
    <div className="Sidebar">
      <h2>Title</h2>
      <nav>
        <ul>
          <li className="form-step">
            <span>Step #1 </span>
            <span
              className={`status-circle ${activeStep === 1 && "active"}`}
            ></span>
          </li>
          <li className="form-step">
            <span>Step #2 </span>
            <span
              className={`status-circle ${activeStep === 2 && "active"}`}
            ></span>
          </li>
          <li className="form-step">
            <span>Step #3 </span>
            <span
              className={`status-circle ${activeStep === 3 && "active"}`}
            ></span>
          </li>
          <li className="form-step">
            Review{" "}
            <span
              className={`status-circle ${activeStep === 4 && "active"}`}
            ></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
