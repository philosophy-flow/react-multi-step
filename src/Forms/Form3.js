import React from "react";
import { Link } from "react-router-dom";

export default function Form3() {
  return (
    <div>
      <div>
        <h3>Form 3</h3>
        <Link to="/2">
          <button>Previous Segment</button>
        </Link>
        <Link to="/review">
          <button>Next Segment</button>
        </Link>
      </div>
    </div>
  );
}
