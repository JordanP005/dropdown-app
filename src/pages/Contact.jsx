import React from "react";
import Header from "../components/Header";

function Contact() {
  return (
    <div>
      <Header />
      <div className="contactpage-div">
        <div className="contact-text">
          <h1>Fill in you details and we'll get back to you.</h1>
        </div>
        <div className="contact-row-1">
          <input placeholder="First Name" type="text" />
          <input placeholder="Last Name" type="text" />
        </div>
        <div className="contact-row-2">
          <input placeholder="Email" type="email" />
          <textarea type="text" placeholder="Query" />
        </div>
        <button className="contact-button">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
