import React, { Component } from "react";
import { Link } from "react-router-dom";

import MainToolbar from "components/utility/MainToolbar";
import CompNav from "components/utility/CompNav";

import menu from "img/icons/menu.svg";
import tips_ico from "img/icons/tips.svg";
import back_arrow from "img/icons/back-arrow.svg";

const CompetencyPage = () => {
  return (
    <>
      <MainToolbar classVal="collapse" />
      <CompNav />
        <main class="layout">
          <div className="tile full smarterLearning white-txt">
            <div className="local-nav">
              <Link to="/dashboard"><img src={back_arrow} className="back-icon" alt="page back icon"/></Link>
              <Link to="javascript:"><img src={menu} className="menu-icon" alt="menu icon"/></Link>
            </div>
            <h1>Smarter Learning</h1>
            <h3>Chapter: Harnessing the power of failure</h3>
          </div>
      
          <div className="tabs">
            <h2 className="tab selected">Scenario</h2>
            <Link to="/analysis"><h2 className="tab disabled">Analysis</h2></Link>
            <Link to="/reflection"><h2 className="tab disabled">Reflection</h2></Link>
          </div>
      
          <div className="tile full scenario">
            <div className="tips">
              <img className="light" src={tips_ico} alt="tips"/>
            </div>
            <h1>Scenario</h1>
            <p>Jim was hired to help a local politician get re-elected. He had a college certificate in general business practice, and a Personal Learning Preference (PLP) that leaned to the concrete/graphic preference quadrant. When Jim arrived at the office, he received a large file of documents and instructions which detailed his very wide range of responsibilities. The politician was mostly on the road, building community support, so Jim was left with one office colleague and some volunteers to see things ran smoothly at headquarters.Jim was not a person comfortable with text as much as he was with graphic material and the thought of wading through the file was daunting - he wanted to get things done. Jim did not read the file, nor did he find someone more comfortable with textual material to help him by doing so.</p>
            <div className="steps">
              <div className="step active"></div>
              <div className="step"></div>
            </div>
          </div>
      
          <div className="tile blank center very-tight-padding">
            <div id="nextBtn" className="button button-sticky-big">Next</div>
          </div>
      
          <div className="tile full scenario">
            <h1>Scenario</h1>
            <p>At the same time, he contacted the returning officer to make sure the dates and rules were followed. He gave an assistant the job of organizing the volunteers for the canvassing, and he took on the job of fundraising with the candidate. Jim was a personable guy and people were happy to see him. But what was not so positive was that Jim lacked any knowledge of the riding, the procedures that had historically been in place or, most vitally, the policies of his boss. All that material had been in the file which Jim had decided not to read. The result was that Jim could not really campaign with his boss, could not answer questions, help with briefings or speak to the press or local associations on behalf of the riding office. The candidate lost the election.</p>
            <div className="steps">
              <div className="step"></div>
              <div className="step active"></div>
            </div>
          </div>
        </main>
      </>
  )
}

export default CompetencyPage;
