import React from "react";
import Header from "../components/Header";

function Seo() {
  return (
    <div>
      <Header />
      <div className="seo">
        <div className="seo-img">
          <img src="images/seoimg.png" />
        </div>
        <div className="seo-text">
          <h1>SEO</h1>
          <p>
            We optimize your website to drive the most traffic to your product
            or services. Having and optimized SEO guarantees more organic
            trafiic and higher ranking on Google searches.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Seo;
