import React from "react";
import "./services.scss";
const Services: React.FC = () => {
  return (
    <section className="services fill-view container" id="services">
      <div className="services-intro w-100 d-flex-center flex-col">
        <h2 className="akata-title-medium services-intro-title">
          Solving Tech Challenges with Our <span> IT Services</span>
        </h2>
        <p className="akata-text-medium services-intro-description">
          In a rapidly evolving digital landscape, businesses face a multitude
          of technology challenges. At Akata Goavana , we offer tailored
          solutions to address these challenges and help you thrive in the
          digital age.
        </p>
      </div>
    </section>
  );
};

export default Services;
