import React from "react";
import Header from "../components/Header";

function Sales() {
  return (
    <div>
      <Header />
      <div className="sales-div">
        <div className="sales-img">
          <img src="/images/salesimg.png" />
        </div>
        <div className="sales-text">
          <h1>Sales</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sales;
