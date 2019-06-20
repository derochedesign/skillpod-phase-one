import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MainToolbar from "components/utility/MainToolbar";
import CompNav from "components/utility/CompNav";
import Scenario from "components/competency/Scenario";
import Analysis from "components/competency/Analysis";

import menu from "img/icons/menu.svg";
import back_arrow from "img/icons/back-arrow.svg";

const CompetencyPage = props => {

  //const [pageNum, setPageNum] = useState(0);
  const page = parseInt(props.page);
  const type = props.type;
  const skill = props.skill;
  const comp = props.comp;

  // CHECK SKILL AND COMP TO ENSURE THEY ARE VALID!!!

  // Get the current page from the url
  //useEffect(() => setPageNum(props.page));

        
  let contentType;

  switch (type) {
    case `analysis`:
      contentType = <Analysis page={page} skill={skill} comp={comp} />;
      break;
    case `reflection`:

      break;
    case `scenario`:
    default:
      contentType = <Scenario page={page} skill={skill} comp={comp} />;
      break;
  }

  return (
    <>
      <MainToolbar classVal="collapse" />
      <CompNav />
      <main class="layout">
        <div className={`tile full white-txt ${skill}`}>
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
    
        { contentType }
    

    
      </main>
    </>
  )
}

export default CompetencyPage;
