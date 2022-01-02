import React from "react";
import "./contact-email.css";
import emailjs from "emailjs-com";

function ContactEmail() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8oo7yr",
        "template_gyro99n",
        e.target,
        "user_Azuizob9kFD4EAUdDgpEx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact-email-container">
      <form onSubmit={sendEmail} className="form">
        <div className="form-left">
          <div className="form-name form-left-group">
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" />
          </div>

          <div className="form-email form-left-group">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" />
          </div>

          <div className="form-subject form-left-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
        </div>

        <div className="form-right-group">
          <div className="form-message">
            <label>Message</label>
            <textarea cols="30" rows="8" name="message" />
          </div>

          <div className="send-button">
            <input className="button" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactEmail;
