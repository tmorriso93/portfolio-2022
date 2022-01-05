import React from "react";
import "./social-contact.css";
import { SocialData } from "../data/social";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" alt="" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
