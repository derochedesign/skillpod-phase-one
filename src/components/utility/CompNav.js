import React from "react";
import comp_ico from "img/icons/competency.svg";

const { useState, useRef } = React;

const CompNav = (props) => {
    return (
      <nav className="toolbarModule">
        <h1>Skill Home</h1>
        <h5>A skill consists of four competencies.</h5>
        <h4>Start Learning</h4>
        <h6>Current Competency</h6>
        <div className="two-column-grid active">
          <img src={comp_ico}/>
          <span>Harnessing the power of failure</span>
          <div className="progress"></div>
        </div>
        <h6>Unbegan Competencies</h6>
        <div className="two-column-grid">
          <img src={comp_ico}/>
          <span>Cultivating a growth mindset</span>
          <div className="progress"></div>
        </div>
        <h6>Completed Competencies</h6>
        <div className="two-column-grid complete">
          <img src={comp_ico}/>
          <span>Knowing yourself as a failure</span>
          <div className="progress"></div>
        </div>
        <div className="two-column-grid complete">
          <img src={comp_ico}/>
          <span>Achieving nothing in your life</span>
          <div className="progress"></div>
        </div>
        
      </nav>
    )
}
export default CompNav;