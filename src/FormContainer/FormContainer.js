import "./FormContainer.css";
import React from "react";
import FormRouter from "../Forms/FormRouter";

export default function FormContainer() {
  return (
    <div className="FormContainer">
      <div className="buffer"></div>
      <div className="content">
        <FormRouter />
      </div>
    </div>
  );
}
