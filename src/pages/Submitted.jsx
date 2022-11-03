import React from "react";
import Header from "../components/Header";

function Info() {
  return (
    <div>
      <Header />
      <div className="submit-div">
        <div>
          <i class="fa-regular fa-circle-check"></i>
        </div>
        <div>
          <h1>Thanks for submiting, you'll hear from us soon!</h1>
        </div>
      </div>
    </div>
  );
}

export default Info;
