import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Components
import SkillTile from "components/dashboard/SkillTile";
import MiniSkillTile from "components/dashboard/MiniSkillTile";
import HeadProgress from "components/dashboard/HeadProgress";
import TipsPopup from 'components/TipsPopup';
import MainToolbar from "components/utility/MainToolbar";

// Images
import nav_back from "img/icons/backward-arrow.svg";
import nav_forward from "img/icons/forward-arrow.svg";

// Data
import ModuleTable from "data/Module.json";


const DashboardPage = props => {
  
  const [popVisible, setPopVisible] = useState(false);
  console.log(`inf: ${popVisible}`);

  //this!!!
  //useEffect(  JSON.parse(ModuleTable)  );
  useEffect(() => {
    //console.log('Hello world', ModuleTable);
    setModule(ModuleTable);

    //import nav_forward from modules.;
    
    //console.log(ModuleTable, JSON.parse(ModuleTable));
  }, []);
  
  const [modules, setModule] = useState([]
    // [
    //   //go to tips pop up
    //   {id: 0, name: "Self Work", icon: selfWork, class: "selfwork",
    //   progress: 12.5*8, color: "#42C2CF", complete: true, comp: 4 },
    //   //current module pos
    //   {id: 3, name: "Information Management", icon: infoManagement, class: "info-management",
    //   progress: 12.5*8, color: "#42C2CF", complete: true, comp: 4 },
    //   //portfolio piece
    //   {id: 6, name: "Smarter Learning", icon: smarterLearning, class: "smarter-learning",
    //   progress: 12.5*6, color: "#42C2CF", complete: false, comp: 3 },
    //   //disabled, and so on
    //   {id: 1, name: "Design & Innovation", icon: designInnovation, class: "design-innovation",
    //   progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },

    //   {id: 4, name: "Strategic Thinking", icon: strategicThinking,  class: "strategic-thinking",
    //   progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },
    //   //new module
    //   {id: 5, name: "Teamwork", icon: teamwork, class: "teamwork",
    //   progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },

    //   {id: 2, name: "Communication & Networking", icon: communication, class: "networking",
    //   progress: 12.5*0, color: "#42C2CF", complete: false, comp: 0 },
    // ]
  );
  
  const navigateSkills = () => {
    console.log("do something");
    //set selected class to next skill. align it to left of view. change background gradient colour
    //disabled buttons if on first or last skill
  }
  
  return (
    <>
    <MainToolbar page="dashboard" />
      <main className="layout dashboard">
      
        {(popVisible) && <TipsPopup tile={props.tile} />}

        <div className="tile no-shadow no-bottom-padding">
          <h1>Dashboard</h1>
          <h5>Welcome back, Sherry.</h5>
          <h4>Skill Path</h4>
        </div>
    
        <div id="setBackgroundGradient" className="scrollable-row">
          {
            modules.map( (tile,i) => 
              <SkillTile tile={tile} key={i} popVisible={popVisible} setPopVisible={setPopVisible}/>
            )
          }  
        </div>
    
        <div className="skill-navigation">
          <div className="skill-nav-buttons">
            <button className="round" onClick={navigateSkills}><img alt="back one skill icon" src={nav_back}/></button>
            <button className="round" onClick={navigateSkills}><img alt="forward one skill icon" src={nav_forward}/></button>
          </div>
        </div>
    
        <div className="tile trophies">
          <div>
            <h4>Completed Skills</h4>
            <h5>Recap on skills you’ve completed.</h5>
            <div className="scrollable-row trophy-case">
              {
                modules.filter(tile => tile.complete).map((tile, i) =>
                  <MiniSkillTile tile={tile} key={i} popVisible={popVisible} setPopVisible={setPopVisible}/>
                )
              }
            </div>
          </div>
    
          <div>
            <h4>Progress</h4>
            <h5>All your Skillpod progress in one spot.</h5>
            <HeadProgress />
          </div>
    
          <div className="footer-grid">
            <section>
              <h1>Want to know yourself better?</h1>
              <h2>Take the PLP, a personalized learning profile quiz.</h2>
              <a className="button" rel="noopener" target="_blank" href="https://plp.skillpod.ca">Learning Profile</a>
            </section>
            <section>
                <h1>Get extra help.</h1>
                <h2>Tips, Tools, and FAQ.</h2>
                <Link className="button" to="/help">Help</Link>
              </section>
            <section>
              <h1>More about Skillpod.</h1>
              <h2>Read more about the organization.</h2>
              <a className="button" rel="noopener" target="_blank" href="https://skillpod.ca">Skillpod</a>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardPage;
