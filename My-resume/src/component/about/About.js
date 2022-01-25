/*eslint-disable*/
import React from "react";
import Insta from "../../img/insta.png";
import Linkdin from "../../img/LinkedIn.png";

import "./about.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://speckyboy.com/wp-content/uploads/2011/01/bwtypo_08.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">ABOUT Me</h1>
        <p className="a-sub">
          An ambitious problem solver with a passion for online businesses. I
          have much experience of creating logical and innovative solutions to
          complex problems. I am thorough and precise in everything I do, and
          have a keen interest in technology and web applications. As someone
          who takes responsibility for his own personal development, I am
          continually evaluating and upgrading my skills so that I stay at the
          cutting edge of web development. I am a natural problem solver
        </p>
        <p className="a-desc"></p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">FOLLOW ME ON</h4>
            <p className="a-award-desc">
              <img src={Insta} alt="" className="img-a"></img>
              <a href="https://www.linkedin.com/in/atieh-amini-151630138/">
                <img src={Linkdin} alt="" className="img-a" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
