import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./DesignProcess.scss";
import StyleContext from "../../contexts/StyleContext";

const processSteps = [
  {
    step: "01",
    title: "Research & Discovery",
    description: "Understanding user needs, business goals, and market context through research and stakeholder interviews.",
    icon: "🔍"
  },
  {
    step: "02", 
    title: "Ideation & Wireframing",
    description: "Brainstorming solutions and creating low-fidelity wireframes to explore different approaches.",
    icon: "💡"
  },
  {
    step: "03",
    title: "Prototyping & Testing",
    description: "Building interactive prototypes in Figma and conducting usability testing with real users.",
    icon: "🎨"
  },
  {
    step: "04",
    title: "Design & Iteration",
    description: "Creating high-fidelity designs and iterating based on feedback and testing results.",
    icon: "✨"
  },
  {
    step: "05",
    title: "Development Handoff",
    description: "Collaborating with developers to ensure pixel-perfect implementation and smooth delivery.",
    icon: "🚀"
  }
];

export default function DesignProcess() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="design-process-main" id="process">
        <div className="design-process-header">
          <h1 className={isDark ? "dark-mode process-title" : "process-title"}>
            My Design Process {emoji("🎯")}
          </h1>
          <p className={isDark ? "dark-mode process-subtitle" : "process-subtitle"}>
            How I approach creating user-centered solutions from concept to completion
          </p>
        </div>
        
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <Fade bottom duration={1000} distance="40px" delay={index * 200} key={index}>
              <div className={`process-step ${isDark ? "dark-mode" : ""}`}>
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
}
