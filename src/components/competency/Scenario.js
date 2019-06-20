import React from "react";
import { Link } from "react-router-dom";

import tips_ico from "img/icons/tips.svg";

const Scenario = props => {

  const page = props.page;
  const skill = props.skill;
  const comp = props.comp;

  const compText = [
    `Jim was hired to help a local politician get re-elected. He had a college certificate in general business practice, and a Personal Learning Preference (PLP) that leaned to the concrete/graphic preference quadrant. When Jim arrived at the office, he received a large file of documents and instructions which detailed his very wide range of responsibilities. The politician was mostly on the road, building community support, so Jim was left with one office colleague and some volunteers to see things ran smoothly at headquarters.Jim was not a person comfortable with text as much as he was with graphic material and the thought of wading through the file was daunting - he wanted to get things done. Jim did not read the file, nor did he find someone more comfortable with textual material to help him by doing so.`,
    `At the same time, he contacted the returning officer to make sure the dates and rules were followed. He gave an assistant the job of organizing the volunteers for the canvassing, and he took on the job of fundraising with the candidate. Jim was a personable guy and people were happy to see him. But what was not so positive was that Jim lacked any knowledge of the riding, the procedures that had historically been in place or, most vitally, the policies of his boss. All that material had been in the file which Jim had decided not to read. The result was that Jim could not really campaign with his boss, could not answer questions, help with briefings or speak to the press or local associations on behalf of the riding office. The candidate lost the election.`
  ];

  const pagination = compText.map((c, i) => <div className={ (i == page) ? `step active` : `step` }><Link key={i} to={`/skill/${skill}/scenario/${comp}/${i}`}></Link></div>);
  const nextPath = (compText[page + 1]) ? `/skill/${skill}/scenario/${comp}/${page+1}` : `/dashboard`;

  return (
    <div className="tile full scenario">
      <div className="tips">
        <img className="light" src={tips_ico} alt="tips"/>
      </div>
      <h1>Scenario</h1>
      <p>{ compText[page] }</p>
      <div className="steps">
        { pagination }
      </div>
      <div className="tile blank center very-tight-padding">
        <Link to={nextPath}><div id="nextBtn" className="button button-sticky-big">Next</div></Link>
      </div>
    </div>
  )
}

export default Scenario;