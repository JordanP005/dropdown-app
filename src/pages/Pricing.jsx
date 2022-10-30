import React from "react";
import Header from "../components/Header";

function Pricing() {
  return (
    <div>
      <Header />
      <div className="pricing-div">
        <div className="pricing-table">
          <div className="price-block">
            <div className="info-block">
              <h1>Basic</h1>
              <h2>features</h2>
              <ul>
                <li>Feature 1</li>
                <li>Feature 4</li>
                <li>Feature 3</li>
              </ul>
            </div>

            <h1>$50/PM</h1>
          </div>
          <div className="price-block">
            <div className="info-block">
              <h1>Premium</h1>
              <h2>features</h2>
              <ul>
                <li>Feature 1</li>
                <li>Feature 4</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <h1>$75/PM</h1>
          </div>
          <div className="price-block">
            <div className="info-block">
              <h1>Enterpirse</h1>
              <h2>features</h2>
              <ul>
                <li>Feature 1</li>
                <li>Feature 4</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <h1>$100/PM</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
