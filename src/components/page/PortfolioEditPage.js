import React from "react";
import { Link } from "react-router-dom";

import communication from "img/icons/skills/communication.svg";
import selfWork from "img/icons/skills/selfWork.svg";
import designInnovation from "img/icons/skills/designInnovation.svg";
import MainToolbar from "components/utility/MainToolbar";


function PortfolioEditPage(props) {
  return (
    <>
      <MainToolbar page="portfolio" />
      <main className="layout">
        <div className="tile blank">
          <h1>Skillpod Portfolio</h1>
          <h3>Editing</h3>
        </div>
        <div className="button-corner">
          <Link to="/portfolio" className="button">
            <span>Save</span>
          </Link>
        </div>
        <div className="tile full no-padding profile-hero">
          <section className="portfolio-bio two-column-grid">
            <div className="profile-image">
              <div className="hero-info">
                <h1 className="white-txt">Brent Chad</h1>
                <div className="tags">
                  <h4>Leadership</h4>
                  <h4>Resilience</h4>
                  <h4>Coolness</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="tile blank">
                <h2>Bio</h2>
                <textarea placeholder="Type here...">
                  This is all about me! I'm a person that uses Skillpod, and I
                  love it!
                </textarea>
              </div>

              <div className="tile blank no-top-padding">
                <div>
                  <h2>Contact Brent</h2>
                  <div className="contact-info two-column-grid">
                    <h4>Email</h4>
                    <input type="text" value="abc@def.com" />

                    <h4>Phone</h4>
                    <input type="text" value="123-456-789" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="tile blank">
          <h1>Portfolio Pieces</h1>
        </div>

        <div className="two-column-grid public-private">
          <div>
            <div className="tile blank no-vertical-padding">
              <h2 className="no-vertical-margin">Public</h2>
            </div>

            <ul className="vertical-stack invert">
              <li className="tile module two-column-grid selfwork">
                <div className="put-after">
                  <h4 className="small-margin-bottom">Module</h4>
                  <h3>Self Work</h3>
                </div>
                <img alt="skill icon" src={selfWork} />
                <div className="drag-me">
                  <div />
                  <div />
                </div>
                <div className="tool-menu two-column-grid">
                  <h3>Private</h3>
                  <h3>View</h3>
                </div>
              </li>
              <li className="tile module two-column-grid design-innovation">
                <div className="put-after">
                  <h4 className="small-margin-bottom">Module</h4>
                  <h3>Design & Innovation</h3>
                </div>
                <img alt="skill icon" src={designInnovation} />
                <div className="drag-me">
                  <div />
                  <div />
                </div>
                <div className="tool-menu two-column-grid">
                  <h3>Private</h3>
                  <h3>View</h3>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="tile blank no-vertical-padding">
              <h2 className="no-vertical-margin">Private</h2>
            </div>

            <ul className="vertical-stack dark-bg invert">
              <li data-id="2" className="tile module two-column-grid networking">
                <div className="put-after">
                  <h4 className="small-margin-bottom">Module</h4>
                  <h3>Communication & Networking</h3>
                </div>
                <img alt="skill icon" src={communication} />
                <div className="drag-me">
                  <div />
                  <div />
                </div>
                <div className="tool-menu two-column-grid">
                  <h3>Public</h3>
                  <h3>View</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="tile blank">
          <h1>About You</h1>
        </div>

        <div className="tile">
          <h2>Using a Skillpod lens:</h2>
          <textarea placeholder="Describe yourself." />
          <h2>What are your top strengths (choose a maximum of 3)</h2>

          <ul className="check-box-container">
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option1"
                value="Communication"
              />
              <span>Communication</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option2"
                value="Consequences"
              />
              <span>Cosequences</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option3"
                value="Confidence"
              />
              <span>Confidence</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option4"
                value="Leadership"
              />
              <span>Leadership</span>
            </li>
            <li>
              <input
                className="check-box"
                type="checkbox"
                name="option5"
                value="Conflict Resolution"
              />
              <span>Conflict resolution</span>
            </li>
          </ul>
          <h2>My Goal</h2>
          <p>I want to have more this in that. [GOAL HERE]</p>
          <textarea placeholder="Talk about your goal." />

          <h2>What I can offer a company</h2>
          <textarea placeholder="Type here..." />

          <Link to="/portfolio" className="button">
            <span>Save</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default PortfolioEditPage;
