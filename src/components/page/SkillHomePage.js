import React, { Component } from "react";
import { Link } from "react-router-dom";

import SkillTileProgress from 'utility/SkillProgress';

import menu from "img/icons/menu.svg";
import comp_ico from "img/icons/competency.svg";
import back_arrow from "img/icons/back-arrow.svg";
import smarterLearning from "img/icons/skills/smarterLearning.svg";
import MainToolbar from "components/utility/MainToolbar";


const { useState, useRef } = React;

function SkillHomePage(props) {
  
  const skillData = {id: 6, name: "Smarter Learning", icon: smarterLearning, class: "smarterLearning",
  progress: 12.5*6, color: "#42C2CF", complete: false, comp: 3 };
  
  const [progress, setProgress] = useState({
    progress: `60%`, complete: false, comp:3
  });
    
  const skillInfo = {
    sub: `Anything and everything Smarter Learning.`,
    desc: [
      `Learning is the change in one's behaviour or knowledge which comes about as a result of experience.`,
      `We all learn in different ways, and sometimes individuals have different methods of learning depending on the job they need to do.`
    ],
    employersValue: [
      `Willingness to learn`,
      `Resilience`,
      `Resourcefulness`,
      `Adaptability`,
      `Learns effectively from others`
    ],
    compDesc:[
      {
        "title":`Knowing yourself as a learner.`,
        "desc":`Complete the Personal Learning Profile to get a more in depth understanding of your learning preferences. The better you know yourself, the smarter and faster you can learn.`
      },
      {
        "title":`Cultivating a growth mindset.`,
        "desc":`A growth mindset is more than being open-minded. It is a belief that you, as an individual are capable of improving if consistent effort is applied. These individuals are less concerned with proving themselves than about improving.`
      },
      {
        "title":`Achieving your goals.`,
        "desc":`Creating well defined goals will help structure your learning.`
      },
      {
        "title":`Harnessing the power of failure.`,
        "desc":`Fear of failure prevents learning. Failure must be reframed as an opportunity for learning.`
      }
    ]
  };
  
  return (
    <>
    <MainToolbar />
    <main className="layout skill-home">
        <div className="always-fill-height">
          <div className="tile full smarterLearning white-txt make-it-relative skill-home-info">
            <div className="local-nav">
              <Link className="back" to="/dashboard"><img alt="page back icon" src={back_arrow} className="back-icon"/></Link>
              <Link className="menu" to=""><img alt="menu icon" src={menu} className="menu-icon"/></Link>
            </div>
            <div className="bring-forward skill-info">
              <h1>{skillData.name}</h1>
              <h5>{skillInfo.sub}</h5>
              {
                skillInfo.desc.map(desc => 
                  <p>{desc}</p>
                )
              }
              <ul>
                <h2>What Employers Value</h2>
                {
                  skillInfo.employersValue.map(val => 
                    <li>{val}</li>
                  )
                }
              </ul>
            </div>
            <div className="skill-progress">
                <h6>Progress</h6>
                <div className="prog-bar light">
                  <SkillTileProgress pos={1} compProgress={progress.comp} complete={progress.complete} />
                  <SkillTileProgress pos={2} compProgress={progress.comp} complete={progress.complete} />
                  <SkillTileProgress pos={3} compProgress={progress.comp} complete={progress.complete} />
                  <SkillTileProgress pos={4} compProgress={progress.comp} complete={progress.complete} />
                </div>            
              </div>
            <div className="begin-module">
              <Link to="/competency/1" className="button">Begin</Link>
            </div>

            <img src={smarterLearning} className="module-background-icon" alt="Smarter Learning background image"/>

          </div>

          </div>
          <div className="always-fill-height">
          <div className="tile full module-snug-top bring-forward skill-home-info">
              <div className="comp-breakdown-grid">
                <img src={comp_ico} alt="chapters icon"/>
                <div>
                  <h1>Chapter Breakdowns</h1>
                  <h5>Explanations of the {skillData.name} chapters.</h5>
                </div>
              </div>
              <div className="more-top-padding">
              {
                skillInfo.compDesc.map(comp => 
                  <div>
                    <h4>{comp.title}</h4>
                    <p>{comp.desc}</p>
                  </div>
                )
              }
              </div>
            </div>

          </div>
        </main>
      </>
  )
}
export default SkillHomePage;
