import React, { Component } from "react";
import { Link } from "react-router-dom";

import back_arrow from "img/icons/back-arrow.svg";
const { useState} = React;

const CurrentPortfolioPiece = props => {

  const [piece, setPiece] = useState(props.piece);
  
  return (
    <div className="current-portfolio-piece">
      <div className="tile full no-padding">
        <div className="profile-image">
          <div>
            <img alt="portfolio piece image" src={piece.img} />
          </div>
        </div>
        <div className="tile blank">
          <Link to="null:">
            <img alt="page back icon" className="go-back" src={back_arrow} />
          </Link>
          <h1 className="no-vertical-margin">{piece.title}</h1>
          <h2 className="no-vertical-margin">
            {piece.skill.name}
          </h2>
          <p>{piece.content}</p>
          {/* This would go back to portfolio piece selection. it only shows if a piece has been selected. */}
          <Link to="null:" className="button">Go Back</Link>
        </div>
      </div>
    </div>
  )
}

export default CurrentPortfolioPiece;
