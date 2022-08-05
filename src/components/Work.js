import "./Cardstyles.css";
import Card from "./Card";
import Workdata from "./Workdata";

import React from 'react';


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">-Projects-</h1>
        <div className="project-container">
            {Workdata.map((val,ind) => {
                return(
                    <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    repo={val.repo}
                    />
                )
            })}
 
        </div>
    </div>
  )
}

export default Work