import React from "react";

const PortfolioThumbs = props => {
  return (
        
    <div className="portfolio-thumb" onClick={()=> props.setPopVisible(true)}>
        <div className="thumb-info">
            <div className={`mini-module module ${props.piece.skill.class}`}>
            <img alt="skill icon" src={props.piece.skill.icon }/>
            </div>
            <h4>{props.piece.title}</h4>
        </div>
    </div>
  )
}
export default PortfolioThumbs;