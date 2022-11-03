import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="about-div">
        <h1>About</h1>
        <p>
          We created this company to bring business out of the dark ages of
          physical advertising and into the modern era of digital marketing. We
          save business thousands of dollars while also helping them reach new
          and bigger audiences.
        </p>
      </div>
    </div>
  );
}

export default About;
