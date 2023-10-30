import React from "react";
import Image from "next/image";
import "./projects.scss";
import Link from "next/link";
import projectData from "../../../data/projects.json";
const Projects: React.FC = () => {
  return (
    <section
      className="akata-projects   d-flex-center flex-col fill-view"
      id="projects"
    >
      <Image
        src={"/images/hand-robot-shape.png"}
        width={310}
        height={515}
        alt={`decorator`}
        className="robot-hand"
      />
      <div className="container">
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
          {projectData.map((data) => (
            <Link
              className="project"
              href={data.website}
              passHref={true}
              key={data.name}
              target="_blank"
            >
              <Image
                src={data.imageSrc}
                width={300}
                height={162}
                alt={`Service`}
                className="project-logo"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
