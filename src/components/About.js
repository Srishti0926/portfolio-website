import "./Aboutstyle.css";
import React from 'react';
import create from "../assets/creative.png"

const About = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Srishti means Creation</h1>
            <p>My name itself speaks a lot about me. I love creating, designing and developing things and that is why I chose to become a Software Engineer.</p>
            <br></br>
            <br></br>
            <a href="https://www.linkedin.com/in/srishti-shetty09/" class="btn">Connect through LinkedIn</a>
           
            <a href="https://github.com/Srishti0926" class="btn">My Github</a>
        </div>
        <div className="right">
            <div className="img-container">
                <img src={create} className="img"/>
            </div>

        </div>
    </div>

  )
}

export default About