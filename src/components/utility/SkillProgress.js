import React, { Component } from 'react';

const SkillProgress = (props) => {
    
    //props.compProgress, .complete, .pos
    
    //if product is less than 1 or skill complete, then complete; if equal to 1 & skill not complete, then active; if greater than 1, nothing;
    return (
        <h3 className={(props.pos/props.compProgress < 1 || props.complete) ? "complete" : (props.pos/props.compProgress == 1 && !props.complete) ? "active" : undefined }>{props.pos}</h3>
    )
}
export default SkillProgress;
