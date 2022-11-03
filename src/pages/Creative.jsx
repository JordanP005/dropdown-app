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
            Our team of graphic designers create original and professional
            content, ranging from Ad creatives to social media page banners. We
            cover all areas of digital creativity and make you business stand
            out online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Creative;
