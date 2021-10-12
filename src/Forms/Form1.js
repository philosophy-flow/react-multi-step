import React from "react";
import { Link } from "react-router-dom";

export default function Form1() {
  return (
    <div>
      <h3>Form 1</h3>
      <Link to="/2">
        <button>Next Segment</button>
      </Link>
    </div>
  );
}
