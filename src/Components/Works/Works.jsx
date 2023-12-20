import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import img2 from "../../img/img1.png";
import img3 from "../../img/img4.png";
import img4 from "../../img/img3.png";
import img5 from "../../img/img2.png";
import { motion } from "framer-motion";

const Works = () => {
  

  return (
    <div className="Works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands $ Clients</span>
        <span> <h3>
          There are many ways to get relevant experience.
          <br />
          My some degrees include a year in industry or placement,<br/>
           which is a
          great way to develop web development skills.
          <br />
          front end: working on the interface and visual design, focusing on
          aspects that users interact with.
          <br />
          back end: which focuses solely on the underlying software and
          <br/>
          databases, where you'll deal with functional aspects
          <br />
          It's also possible to combine the two which is known as full-stack
          development.
          </h3>  </span>
        {/* <a href={Resume} download>
        <button className="button s-button">Download CV</button></a> */}
        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side   */}

      <div className="m-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition ={{ duration: 3.5, type: "spring" }}
          className="m-mainCircle"
        >
          <div className="m-seCircle1">
            <img src={Upwork} alt="" />
          </div>
          <div className="m-seCircle2">
            <img src={img2} alt="" />
          </div>
          <div className="m-seCircle3">
            <img src={img3} alt="" />
          </div>
          <div className="m-seCircle4">
            <img src={img4} alt="" />
          </div>
          <div className="m-seCircle5">
            <img src={img5} alt="" />
          </div>
        </motion.div>

        {/* background circle  */}
        <div className="dubleCircle">
          <div className="m-backCircle blueCircle"></div>

          <div className="m-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
