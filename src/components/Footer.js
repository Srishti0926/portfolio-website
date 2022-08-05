import "./Footerstyles.css";
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <div>        
                
                   <FaLinkedin size={20}
                        style={{color: "#fff",
                        marginRight: "2rem"}}
            /> </div>
            <div>
            <FaInstagram size={20}
                        style={{color: "#fff",
                        marginRight: "2rem"}}
            />
            </div>
            <div>
            <FaGithub size={20}
                        style={{color: "#fff",
                        marginRight: "2rem"}}
            /> 
            </div>
        </div>
    </div>
  )
}

export default Footer