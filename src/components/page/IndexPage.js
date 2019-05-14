import React from "react";
import { Link } from "react-router-dom";

import hero1 from "img/art/web-art-1.png";
import hero2 from "img/art/web-art-2.png";
import hero3 from "img/art/web-art-3.png";
import logo from "img/logos/skillpod-logo.svg";

const IndexPage = props => {

  return (
    <main className="layout intro no-toolbar">
      <div className="tile blank more-tile-padding">
        <div className="indexLarge">
          <div className="logo">
            <img className="logo-img" alt="skillpod logo" src={logo} />
          </div>
          <div className="graphic first">
            <img alt="graphic of unconfident person" src={hero1} />
            <h4>The Digital Age</h4>
            <p>
              Prepare to thrive in work and life. Build, demonstrate, and
              articulate skills critical to working and living in the digital
              age. PUT ALL TEXT HERE ON MOBILE
            </p>
          </div>
          <div className="graphic second">
            <img alt="graphic of disorganized person" src={hero2} />
            <h4>Entrepreneurial Economy</h4>
            <p>
              Prepare for employment by honing and sharing your own unique,
              essential skills required for success in the entrepreneurial
              economy.
            </p>
          </div>

          <div className="graphic third">
            <img alt="graphic of determined person" src={hero3} />
            <h4>Build Your Skills</h4>
            <p>Start building your skills now, with Skillpod.</p>
          </div>
          <div />
          <div className="start">
            <Link to="/yourgoal" className="button">
              Get Started
            </Link>
            <Link to="/login" className="buttonAlt">
              I already have a Skillpod account.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );

}

export default IndexPage;