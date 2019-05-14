import React from 'react';
import { Link } from "react-router-dom";

import designInnovation from "img/icons/skills/designInnovation.svg";

const TipsPopup = (props) => {
  
  return(
    <div id="tipsPopUp" className="pop-up dynamic-content-panel two-column-grid">

    <div className="pop-up-nav">
      <nav className="toolbar">
        <ul className="tools">
          <li className="tool current"><Link to="">tips</Link><div className="tool-selected"></div></li>
          <li className="tool"><Link to="">reflection</Link><div className="tool-selected"></div></li>
          <li></li>
          <li className="tool" id="tipsClose"><Link to="">close</Link><div className="tool-selected"></div></li>
        </ul>
      </nav>
    </div>

    <div className="vertical-stack scrollable-row">
      <div className="tile shrink-vertical tight-padding selected designInnovation white-txt">
        <div className="two-column-grid invert">
          <img alt="skill icon" src={ designInnovation } />
          <div>
            <h2 className="small-margin-bottom">Module</h2>
            <h3 className="no-vertical-margin" id="moduleTitle">Module Name</h3>
          </div>
          <div className="selected-bar"></div>
        </div>
      </div>
      <div className="tile blank shrink-vertical tight-padding">
        <div className="two-column-grid">
        <img alt="skill icon" src={ designInnovation } />
          <div>
            <h2 className="small-margin-bottom">Module</h2>
            <h3 className="no-vertical-margin">Module Name</h3>
          </div>
        </div>
      </div>
      <div className="tile blank shrink-vertical tight-padding">
        <div className="two-column-grid">
        <img alt="skill icon" src={ designInnovation } />
          <div>
            <h2 className="small-margin-bottom">Module</h2>
            <h3 className="no-vertical-margin">Module Name</h3>
          </div>
        </div>
      </div>
    </div>

    <div className="tile">
      <h1>Tips</h1>
      <select id="compSelection" className="">
        <option value="0">competency one</option>
        <option value="1">competency two</option>
        <option value="2">competency three</option>
      </select>
      <p id="tipsContent">Tips Content</p>
    </div>

  </div>
  )
}

export default TipsPopup;
