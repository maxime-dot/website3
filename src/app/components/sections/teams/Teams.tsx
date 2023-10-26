import React from "react";
import "./teams.scss";
const Teams: React.FC = () => {
  return (
    <section className="akata-teams fill-view  container" id="teams">
      <div className="teams-intro d-flex flex-col">
        <div className="intro-title d-flex flex-col">
          <h1 className="akata-title-strong">
            Meet Our Exceptional <span>Team</span>
          </h1>
          <p className="akata-text-big team-intro-description">
            Get to know the talented individuals that make up the Akata Goavana
            team. Our dedicated experts bring a wealth of knowledge and passion
            to every project. Together, w&apos;re committed to delivering IT
            solutions that drive your success. Explore the faces behind our
            innovation.
          </p>
        </div>
      </div>
      <div className="teams-admin-member"></div>
    </section>
  );
};
export default Teams;
