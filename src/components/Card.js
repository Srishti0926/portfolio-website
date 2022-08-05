import "./Cardstyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
      <div className="project-title"> 
         {props.title}
       </div>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view}
            className="btn"> Demo </NavLink>
            <NavLink to={props.repo}
            className="btn"> Repository </NavLink>
        </div>
    </div>
</div>

  )
}

export default Card