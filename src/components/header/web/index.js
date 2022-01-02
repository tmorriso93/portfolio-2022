import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fas fa-terminal option-icon"></i> Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fas fa-laptop option-icon"></i> Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fas fa-briefcase option-icon"></i> Work
        </a>
      </div>
      <div className="web-option option-icon">
        <a href="#contact">
          <i class="fas fa-user option-icon"></i> Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
