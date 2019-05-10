import React from "react";
import { Link } from "react-router-dom";

import ConsentForm from "components/outer/ConsentForm";

import logo from "img/logos/skillpod-logo-head.svg";

const { useState, useRef } = React;

const SignupPage = props => {
  
  return (
    <main className="layout no-toolbar">
      <div className="tile blank">
        <div className="bio-grid">
          <img alt="skillpod logo" src={logo} />
          <div>
            <h1>One last step</h1>
            <h5>Please signup to access the rest of Skillpod.</h5>
          </div>
        </div>
      </div>
      <div className="tile" id="tiles">
        <div className="signup two-column-grid">
          <div>
            <h2>You</h2>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="E-mail" />
              <select>
                <option disabled selected value={null}>Identity</option>
                <option value="no">Prefer not to answer</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non">Non-Binary</option>
                <option value="other">Other</option>
              </select>
            </form>
          </div>
          <div>
            <h2>Location</h2>
            <form>
              <input type="text" placeholder="City" />
              <select>
                <option disabled selected value={null}>
                  Country /* POPULATE W COUNTRIES */
                </option>
                <option value="one">Canada</option>
              </select>
            </form>
          </div>
        </div>

        <p>What best describes your current status?</p>
        <form>
          <select>
            <option disabled selected value={null}>Pick one</option>
            <option value="three">High School</option>
            <option value="one">Community College</option>
            <option value="two">University</option>
            <option value="three">Looking for work</option>
            <option value="one">Onboarding at work</option>
            <option value="two">Looking to advance at work</option>
          </select>
        </form>
        {/* CONFIRM CONSET POP UP BEFORE THIS <ConsentForm /> */}
        <Link to="/dashboard" className="button">
          Submit
        </Link>
      </div>
    </main>
  );
}

export default SignupPage;
