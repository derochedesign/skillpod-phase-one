import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MiniSkillTile extends Component {

    state = {
        tile: this.props.tile
    }

    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <div className={`mini-module module ${this.props.tile.class}`}>
                <img alt={`${this.props.tile.name} skill icon`} src={this.props.tile.icon}/>
            </div>
        )
    }
}
export default MiniSkillTile;
