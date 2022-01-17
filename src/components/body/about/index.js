import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello, my name is
          <br /> <span className="info-name">Tevin Morrison</span>
          <br /> and I'm a Web Developer from Toronto, Canada
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/portfolio7.jpg")}
            className="picture"
            alt=""
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
