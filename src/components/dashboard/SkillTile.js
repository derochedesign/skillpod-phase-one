import React, { Component } from 'react';
import { Link } from "react-router-dom";

import checkmark from "img/icons/checkmark.svg";
import lock from "img/icons/locked.svg";
import SkillProgress from 'utility/SkillProgress';

const { useState, useRef } = React;

const SkillTile = (props) => {
    
    //props.tile
    const decideClick = () => {
        let func;

        if (props.tile.complete) {
            //tips
            func = "this.popTips";
        }
        else if (!props.tile.complete && props.tile.comps == 4) {
            //create pp
            func = "redirect(/portfolio/create)";
        }
        else if (!props.tile.complete && (props.tile.comps < 0 && props.tile.comps > 4)) {
            //continue module
            func = "redirect(/module)";
        }
        else if (!props.tile.complete && props.tile.comps == 0 && (props.tile.completed != this.state.lastCompleted)) {
            //start module
            func = "redirect(/module)";
        }
        else {
            //disabled
            func = null;
        }
        
        return func;
    }
    
    const togglePopUp = () => {
        props.setPopVisible(!props.popVisible);
    }
    
    let destination;
    
    if( (props.tile.complete) ) {
        destination = <button onClick={togglePopUp} type="button" to="/skill" className="button">Recap</button>
    }
    else {
        destination = <Link to="/skill" className="button">Go</Link>
    }
    
    return (
        <div className={`tile module skill-grid ${props.tile.class} ${(props.tile.complete ? "complete" : (!props.tile.comp) ? "disabled" : undefined)}`}>
            <div>
                <div>
                    <h6 className="small-margin-bottom">Skill</h6>
                    <h1>{props.tile.name}</h1>
                </div>
                <div className="module-done"> {props.tile.complete ? <img className="checkmark" alt="complete" src={ checkmark }/> : (!props.tile.comp) && <img alt="locked" src={ lock } />} </div>
            </div>
            <img alt="skill icon" className="skill-icon" src={ props.tile.icon }/>
            <div className="two-column-grid align-center">
                <div className="skill-progress">
                    <h6>Progress</h6>
                    <div className="prog-bar">
                        <SkillProgress pos={1} compProgress={props.tile.comp} complete={props.tile.complete} />
                        <SkillProgress pos={2} compProgress={props.tile.comp} complete={props.tile.complete} />
                        <SkillProgress pos={3} compProgress={props.tile.comp} complete={props.tile.complete} />
                        <SkillProgress pos={4} compProgress={props.tile.comp} complete={props.tile.complete} />
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
