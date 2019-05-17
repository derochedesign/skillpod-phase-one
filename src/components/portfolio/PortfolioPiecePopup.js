import React, { Component } from "react";
import { Link } from "react-router-dom";

import back_arrow from "img/icons/back-arrow.svg";
const { useState} = React;

const PortfolioPiecePopup = props => {
  
  const [piece, setPiece] = useState(props.piece);
  
  return (
    <div className="pop-up">
    
      <div class="inner-pop-up">
        <div className="current-portfolio-piece">
          <div className="tile full no-padding">
            <div>
              <img alt="portfolio piece image" src={piece.img} />
            </div>
            <div className="tile blank port-info">
              <h1 className="no-vertical-margin">{piece.title}</h1>
              <h2 className="no-vertical-margin">
                {piece.skill.name}
              </h2>
              <p>{piece.content}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="close"><span onClick={()=> props.setPopVisible(false)}>&times;</span></div>
      
    </div>
  )
}

export default PortfolioPiecePopup;
