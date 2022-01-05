import React from "react";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import "./contact.css";
import ContactEmail from "./contact-email";

export default function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? please feel free to contact me</p>
          <ContactEmail />
          <br />

          <div className="download">
            <a
              download
              href={require("../../../assets/tevin_morrison_resume01.pdf")}
            >
              <i class="fas fa-download download-icon"> - Download Resume</i>
            </a>
          </div>

          <SocialContact />
        </div>
      </div>
    </div>
  );
}
