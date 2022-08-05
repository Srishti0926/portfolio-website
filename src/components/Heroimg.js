import "./Heroimgstyle.css";
import React from 'react';
import Background from "../assets/background.jpg";
import {Link} from "react-router-dom";


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="background" src=
          {Background} alt="Background" />
        </div>
        <div className="content">
            <h2>Hi I am Srishti.</h2>
            <h1> Software Engineering Student</h1>
            
            <div>
            <Link to="/project" className="btn">Projects</Link>
           </div>
         </div>
    </div>
  );
};

export default Heroimg