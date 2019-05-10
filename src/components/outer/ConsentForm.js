import React from "react";
import { Link } from "react-router-dom";

const { useState} = React;

const ConsentForm = (props) => {
  return (
    <div class="tile popup">
      <h1>Your Information</h1>
      <p>Skillpod uses your information to do:</p>
      <ul class="bulleted">
        <li>thing one</li>
        <li>thing two</li>
        <li>thing three</li>
      </ul>
      <p>We do not do thing four with it.</p>
      <Link to="/load" class="button">
        I Consent
      </Link>
      <br /> {/* bad br */}
      <Link to={null} class="buttonAlt">
        More Information
      </Link>
    </div>
  );
}

export default ConsentForm;
