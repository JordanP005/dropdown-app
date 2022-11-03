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
            We track your online sales and convertions and make sure you are
            kept up to date with everything happening in your business. We
            provide real time sales metrics and monthly reports.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sales;
