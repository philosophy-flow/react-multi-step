import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Form3() {
  const history = useHistory();

  const activeStep = useSelector((state) => state.activeStep);
  if (activeStep === 1) {
    history.push("1");
  }

  return (
    <div className="Form">
      <div>
        <h3>Product Selection</h3>
        <p className="product-page-info">Select your favorite product!</p>
        <form>
          <div className="input-container">
            <input type="radio" name="product" value="product1" />
            <label htmlFor="product1">Product 1</label>
          </div>

          <div className="input-container">
            <input type="radio" name="product" value="product2" />
            <label htmlFor="product1">Product 2</label>
          </div>

          <div className="input-container">
            <input type="radio" name="product" value="product3" />
            <label htmlFor="product1">Product 3</label>
          </div>
          <button type="submit" className="form-btn">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
