import React from 'react';
// import { Link } from "react-router-dom";

const MiniSkillTile = props => {

  const tile = props.tile

  return (
    <div title={`${tile.title}`} className={`mini-module module ${tile.slug}`}>
      <img alt={`${tile.title} skill icon`} src={tile.logo} />
    </div>
  );

}

export default MiniSkillTile;
