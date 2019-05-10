import React, { Component } from "react";

class PortfolioThumbs extends Component {
    
  state = {
      piece: this.props.piece
  }
    
  render() {
    return (
        
        <div className="portfolio-thumb">
            <div className="thumb-info">
                <div className={`mini-module module ${this.state.piece.skill.class}`}>
                <img alt="skill icon" src={ this.state.piece.skill.icon }/>
                </div>
                <h4>{this.state.piece.title}</h4>
            </div>
        </div>
    );
  }
}

export default PortfolioThumbs;
