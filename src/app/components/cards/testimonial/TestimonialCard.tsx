import React from "react";
import "./testimonial-card.scss";
const TestimonialCard: React.FC = () => {
  return (
    <div className="testimonial-card d-flex flex-col">
      <p className="akata-text-small">
        « We greatly appreciate having you all with us as well. We all seem to
        not only work well together which is important, but any of our requests,
        your group jumps right in without hesitation. Pety has been helping out
        with some systems stuff and I think has even been learning a little on
        that end overall for myself, I know I have learned a lot from the group.
        Beyond client/developer relations, I do enjoy and value the unique
        partnership we all have formed and think it is great when we can also
        pick up knowledge along the way 🙂 ».
      </p>
      <div className="customer-info d-flex flex-row">
        <div className="img"></div>
        <div className="info-perso d-flex flex-col">
          <span className="akata-title-medium name">CASEY HARDING</span>
          <p className="akata-text-small post">
            Manager of system & people - Far Frontier Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
