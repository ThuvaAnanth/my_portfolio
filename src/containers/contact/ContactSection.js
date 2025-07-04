import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./ContactSection.scss";
import StyleContext from "../../contexts/StyleContext";
import { contactInfo } from "../../portfolio";

export default function ContactSection() {
  const { isDark } = useContext(StyleContext);

  if (!contactInfo.title) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="contact-section-main" id="contact">
        <div className="contact-header">
          <h1 className={isDark ? "dark-mode contact-title" : "contact-title"}>
            Let's Create Something Amazing Together 
          </h1>
          <p className={isDark ? "dark-mode contact-subtitle" : "contact-subtitle"}>
            Have a project in mind? I'd love to discuss how we can create exceptional user experiences together.
          </p>
        </div>

        <div className="contact-content-single">
          <Fade bottom duration={1000} distance="40px">
            <div className={`contact-card-centered ${isDark ? "dark-mode" : ""}`}>
              <div className="contact-item">
                <div className="contact-icon">{emoji("📧")}</div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${contactInfo.email_address}`} className="contact-link">
                      {contactInfo.email_address}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">{emoji("📱")}</div>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${contactInfo.number}`} className="contact-link">
                      {contactInfo.number}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-cta">
                <a 
                  href={`mailto:${contactInfo.email_address}?subject=Project Inquiry&body=Hi! I'd like to discuss a project with you.`} 
                  className="main-button"
                >
                  Let's Work Together {emoji("🚀")}
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}
