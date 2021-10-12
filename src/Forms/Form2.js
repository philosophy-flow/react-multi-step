import React from "react";
import { Link } from "react-router-dom";

export default function Form2() {
  return (
    <div>
      <h3>Form 2</h3>
      <Link to="/1">
        <button>Previous Segment</button>
      </Link>
      <Link to="/3">
        <button>Next Segment</button>
      </Link>
    </div>
  );
}
