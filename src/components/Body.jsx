import React from "react";

function Body() {
  return (
    <div className="body-main">
      <div className="body-div">
        <div>
          <h1 className="body-h1">The Future </h1>
          <h1 className="body-h1">of Advertising</h1>
        </div>
        <div className="body-bottom">
          <p className="body-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button className="learnmore">Learn more</button>
          <div className="company-div">
            <p>
              <img src="\images\client-databiz.svg" alt="client-databiz.svg" />
            </p>
            <p>
              <img
                src="\images\client-audiophile.svg"
                alt="client-audiophile.svg"
              />
            </p>
            <p>
              <img src="\images\client-meet.svg" alt="client-meet.svg" />
            </p>
            <p>
              <img src="\images\client-maker.svg" alt="client-maker.svg" />
            </p>
          </div>
        </div>
      </div>
      <div className="img-div">
        <img src="\images\image-hero-desktop.png" alt="hero-desktop.svg" />
      </div>
    </div>
  );
}
export default Body;
