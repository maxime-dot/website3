import React from "react";
import Image from "next/image";
import "./projects.scss";
import Link from "next/link";
import projectData from "@/data/projects.json";

const Projects: React.FC = () => {
  return (
    <section
      className="akata-projects  fill-view  d-flex flex-col w-100"
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
            Our <span>customers</span>, the <span>pioneers</span> of business!
          </h2>
          <p className="akata-text-medium">
            We don&apos;t just provide solutions, we partner with you to help
            accomplish your objectives.
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
                width={300 * 2}
                height={162 * 2}
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
