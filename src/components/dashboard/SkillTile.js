import React from 'react';
import { Link } from "react-router-dom";

import checkmark from "img/icons/checkmark.svg";
import lock from "img/icons/locked.svg";
import SkillProgress from 'components/utility/SkillProgress';

// const { useState, useRef } = React;

const SkillTile = (props) => {
    
    //import logo from props.tile.logo;
    //props.tile
    // const decideClick = () => {
    //     let func;

    //     if (props.tile.complete) {
    //         //tips
    //         func = "this.popTips";
    //     }
    //     else if (!props.tile.complete && props.tile.competencies.length == 4) {
    //         //create pp
    //         func = "redirect(/portfolio/create)";
    //     }
    //     else if (!props.tile.complete && (props.tile.competencies.length < 0 && props.tile.competencies.length > 4)) {
    //         //continue module
    //         func = "redirect(/module)";
    //     }
    //     else if (!props.tile.complete && props.tile.competencies.length == 0 && (props.tile.complete != this.state.lastCompleted)) {
    //         //start module
    //         func = "redirect(/module)";
    //     }
    //     else {
    //         //disabled
    //         func = null;
    //     }
        
    //     return func;
    // }
    
    const togglePopUp = () => {
        props.setPopVisible(!props.popVisible);
    }
    
    let destination;
    
    if( (props.tile.complete) ) {
        destination = <button onClick={togglePopUp} type="button" to={`/skill/${props.tile.slug}`} className="button">Recap</button>
    }
    else {
        // If there is progress, go directly to that competency number?
        destination = <Link to={`/skill/${props.tile.slug}`} className="button">Go</Link>
    }

    return (
        <div className={`tile module skill-grid ${props.tile.slug} ${(props.tile.complete ? "complete" : (!props.tile.competencies) ? "disabled" : undefined)}`}>
            <div>
                <div>
                    <h6 className="small-margin-bottom">Skill</h6>
                    <h1>{props.tile.title}</h1>
                </div>
                <div className="module-done"> {props.tile.complete ? <img className="checkmark" alt="complete" src={ checkmark }/> : (!props.tile.competencies.length) && <img alt="locked" src={ lock } />} </div>
            </div>
            <img alt="skill icon" className="skill-icon" src={ props.tile.logo }/>
            <div className="two-column-grid align-center">
                <div className="skill-progress">
                    <h6>Progress</h6>
                    <div className="prog-bar">
                        <SkillProgress pos={1} compProgress={props.tile.competencies.length} complete={props.tile.complete} />
                        <SkillProgress pos={2} compProgress={props.tile.competencies.length} complete={props.tile.complete} />
                        <SkillProgress pos={3} compProgress={props.tile.competencies.length} complete={props.tile.complete} />
                        <SkillProgress pos={4} compProgress={props.tile.competencies.length} complete={props.tile.complete} />
                    {
                        // (props.tile.complete) ? "Complete" : <Hello /> How?
                    }
                    </div>
                </div>
                {destination}
            </div>
        </div>
    )
}

export default SkillTile;
