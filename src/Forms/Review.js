import React from "react";
import { Link } from "react-router-dom";

export default function Review() {
  return (
    <div>
      <h3>Review</h3>
      <Link to="/3">
        <button>Previous Segment</button>
      </Link>
      <Link to="/review">
        <button>Submit</button>
      </Link>
    </div>
  );
}
