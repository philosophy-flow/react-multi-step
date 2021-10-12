import React from "react";

export default function Form3() {
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
