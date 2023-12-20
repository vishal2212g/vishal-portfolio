import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// import Resume from './resume.pdf'
import { themeContext } from '../Context/Context';
import {useContext } from "react"; 
import {motion} from 'framer-motion'

const Services = () => {
  const transition ={duration : 1, type: 'spring'};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Services" id ="Service">
      {/* left side*/}

      <div className="awesome">
        <span style ={{color: darkMode? 'white': ''}}>My awesome</span>
        <span>services</span>
        <span><h3>
          one of the best minimal portfolio website for web developers.
          <br /> The pixel-perfect design and logically arranged sections will
          deliver an impeccable user experience
          </h3> </span>
         {/* <a href={Resume} download>
        <button className="button s-button">Download CV</button></a> */}
         <button className="button s-button">Download CV</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side*/} 
        <div className="cards">
          <motion.div
       initial={{left:'25%'}}
       whileInView={{left:'16rem'}}
       transition={transition}
       style={{ left: "14rem" }}>
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, Sketch,Photoshop, Adobe, Adobexd"}
            />
          </motion.div>

          {/*second card */}

         
          <motion.div
       initial={{left:'35%'}}
       whileInView={{right:'40rem'}}
       transition={transition} style={{ top: "12rem", left:"-4rem" }}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"Html, Css, Javascript, React.js, Express, MongoDB"}
            />
           </motion.div>
      
            {/*second card */}

         
            <motion.div
       initial={{left:'25%'}}
       whileInView={{left:'20rem'}}
       transition={transition} style={{ top: "20rem", left:"20rem" }}>
            <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={"nteraction design is about more than just designing pretty interfaces "}
              
              
            />
          </motion.div>
          <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
       
        </div>
       
    </div>
  );
};

export default Services;
