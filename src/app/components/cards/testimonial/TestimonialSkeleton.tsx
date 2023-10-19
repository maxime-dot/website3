import React from "react";
import "./testimonial-card-skeleton.scss";

const TestimonialCardSkeleton: React.FC = () => {
  return (
    <div className="testimonial-card-skeleton">
      <div className="skeleton-content">
        <div className="text-skeleton d-flex flex-col" style={{ gap: 10 }}>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>{" "}
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>{" "}
          <div className="skeleton-text"></div>{" "}
          <div className="skeleton-text"></div>{" "}
        </div>
        <div className="skeleton-customer-info">
          <div className="skeleton-img"></div>
          <div className="skeleton-info-perso">
            <div className="skeleton-name"></div>
            <div className="skeleton-post"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardSkeleton;
