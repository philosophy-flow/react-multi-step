import "./Sidebar.css";
import React from "react";

// bring in active selection from redux to show user what step of the form they are on

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li className="form-step">
            Step #1 <span className="status-circle"></span>
          </li>
          <li className="form-step">
            Step #2 <span className="status-circle"></span>
          </li>
          <li className="form-step">
            Step #3 <span className="status-circle"></span>
          </li>
          <li className="form-step">
            Step #4 <span className="status-circle"></span>
          </li>
          <li className="form-step">
            Step #5 <span className="status-circle"></span>
          </li>
          <li className="form-step">
            Review <span className="status-circle"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
