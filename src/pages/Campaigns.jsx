import React from "react";
import Header from "../components/Header";

function Campaigns() {
  return (
    <div>
      <Header />
      <div className="camp">
        <div className="camp-div">
          <div className="camp-grid">
            <div className="camp-row-1">
              <div className="camp-block">
                <p>Facebook</p>
                <div className="item-block">
                  <i
                    class="fa-brands fa-facebook camp-icon"
                    style={{ color: "#0031f3" }}
                  ></i>
                </div>
              </div>
              <div className="camp-block">
                <p>Youtube</p>
                <div className="item-block">
                  <i
                    class="fa-brands fa-youtube camp-icon"
                    style={{ color: "red" }}
                  ></i>
                </div>
              </div>
              <div className="camp-block">
                <p>Google</p>
                <div className="item-block">
                  <i
                    class="fa-brands fa-google camp-icon"
                    style={{ color: "#086dff" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="camp-row-2">
              <div className="camp-block">
                <p>Email</p>
                <div className="item-block">
                  <i
                    class="fa-solid fa-envelope camp-icon"
                    style={{ color: "#daa400" }}
                  ></i>
                </div>
              </div>
              <div className="camp-block">
                <p>TikTok</p>
                <div className="item-block">
                  <i
                    class="fa-brands fa-tiktok camp-icon"
                    style={{ color: "#8300ff" }}
                  ></i>
                </div>
              </div>
              <div className="camp-block">
                <p>Instagram</p>
                <div className="item-block">
                  <i
                    class="fa-brands fa-instagram camp-icon"
                    style={{ color: "#df00ff" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="camp-text">
          <h1>Campaigns</h1>
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

export default Campaigns;
