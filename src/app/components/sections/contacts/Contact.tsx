import React from "react";
import "./contacts.scss";
const Contacts: React.FC = () => {
  return (
    <section className="akata-contacts fill-view container" id="contacts">
      <div className="contacts form">
        <div className="form-title">
          <h2 className="akata-title-medium">
            Submit Your <span>Project</span> Requirements
          </h2>
        </div>
      </div>
      <div className="contacts adress"></div>
    </section>
  );
};

export default Contacts;
