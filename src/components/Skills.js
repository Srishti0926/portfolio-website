import "./Skillstyles.css";
import React from 'react';



const Skills = () => {
  return (
    <div className="skills">
        <h1>Skills known</h1>
        <div className="card-container">
            <div className="card">
                <p className="btc">- Programming Languages -</p>
                <span className="bar"></span>
                <p>- Java -</p>
                <p>- Python -</p>
                <p>- C -</p>
                <p>- JavaScript -</p>
                <p>- SQL -</p>

            </div>

            <div className="card">
                <p className="btc">- Databases -</p>
                <span className="bar"></span>
                <p>- MySQL -</p>
                <p>- Sqlite3 -</p>

            </div>
            <div className="card">
                <p className="btc">- Other Technologies -</p>
                <span className="bar"></span>
                <p>- HTML5 -</p>
                <p>- CSS -</p>
                <p>- Django -</p>
                <p>- Reactjs -</p>
                <p>- WordPress -</p>
            </div>
        </div>
    </div>

  )
}

export default Skills