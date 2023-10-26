import React from "react";
import "./projects.scss";
const Projects: React.FC = () => {
  return (
    <section
      className="akata-projects fill-view container d-flex-center flex-col"
      id="projects"
    >
      <div className="project-title d-flex-center flex-col">
        <h2 className="akata-title-medium">
          Our Valued <span>Clients</span>
        </h2>
        <p className="akata-text-medium">
          Meet the exceptional clients who have chosen Akata Goavana for their
          IT needs. Our successful partnerships with these esteemed
          organizations showcase our dedication to excellence and innovation.
          Join our ever-expanding client family and let us lead you toward
          digital success
        </p>
      </div>
      <div className="projects-list d-flex flex-row w-100">
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
      </div>
    </section>
  );
};

export default Projects;
