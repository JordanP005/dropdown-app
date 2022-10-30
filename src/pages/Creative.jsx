import React from "react";
import Header from "../components/Header";

function Creative() {
  return (
    <div>
      <Header />
      <div className="create-div">
        <div className="create-img">
          <img src="/images/creativeimg.png" />
        </div>
        <div className="create-text">
          <h1>Creative</h1>
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

export default Creative;
