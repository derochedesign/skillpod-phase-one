import React, { Component } from 'react';
import { Link } from "react-router-dom";

const MiniSkillTile = props => {
    return (
        <div title={`${props.tile.name} Skill`} className={`mini-module module ${props.tile.class}`}>
            <img alt={`${props.tile.name} skill icon`} src={props.tile.icon}/>
        </div>
    )
}

export default MiniSkillTile;
