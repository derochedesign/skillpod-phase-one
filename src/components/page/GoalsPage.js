import React from "react";
import { Link } from "react-router-dom";

const GoalsPage = props => {
  return (
    <main className="layout goals no-toolbar">
      <div className="tile blank white-txt">
        <h1>Create Your Goal</h1>
        <h5>This goals determines your custom path through Skillpod!</h5>
      </div>
      <div className="tile blank white-txt">
        <div className="build-goal">
          <div className="goal-line">
            <h1>I want to build skills in</h1>
          </div>
          <div className="goal-line">
            <select className="goal-input" id="goalFieldOne">
              <option disabled defaultValue value>
                Select One
              </option>
              <option value="none">options here</option>
            </select>
            <h1>in the</h1>
          </div>
          <div className="goal-line">
            <h1>field of</h1>
            <select className="goal-input">
              <option disabled defaultValue value>
                Select One
              </option>
              <option value="none">options here</option>
            </select>
            <h1>.</h1>
          </div>
        </div>
      </div>
      <div className="tile blank no-top-padding center">
        {/* CONFIRM POP UP BEFORE THIS */}
        <Link to="/signup" className="button button-wide">
          Begin
        </Link>
      </div>
      {/*<div>
                <IndexGoalForm className="tile" />
             </div>    SHOULD BE REWORKED*/}
    </main>
  );
}

export default GoalsPage;
