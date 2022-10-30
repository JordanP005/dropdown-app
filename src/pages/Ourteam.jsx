import React from "react";
import Header from "../components/Header";

function Ourteam() {
  return (
    <div>
      <Header />
      <div className="team-div">
        <div className="team-text">
          <h1>Meet the team</h1>
          <p>This is who are behind the wheel.</p>
        </div>
        <div className="team-img">
          <img src="/images/teamimg.png" />
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
