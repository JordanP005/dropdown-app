import React from "react";
import Header from "../components/Header";

function History() {
  return (
    <div>
      <Header />
      <div className="history-div">
        <div className="history-text">
          <h1>History</h1>
          <p>The history of AdSnap (so far).</p>
        </div>
        <div className="history-img">
          <img src="/images/historyimg.png" />
        </div>
      </div>
    </div>
  );
}

export default History;
