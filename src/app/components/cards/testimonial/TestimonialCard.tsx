import React from "react";
import "./testimonial-card.scss";
import Image from "next/image";
interface CardProps {
  name: string;
  profile: string;
  testimonials: string;
  post: string;
}
const TestimonialCard: React.FC<CardProps> = ({
  name,
  profile,
  post,
  testimonials,
}) => {
  return (
    <div className="testimonial-card d-flex flex-col">
      <p className="akata-text-small testimonial">{testimonials}</p>
      <div className="customer-info d-flex flex-row">
        <Image
          src={profile}
          width={53}
          height={53}
          alt={`${name} profile`}
          className="img"
          priority={true}
        />
        <div className="info-perso d-flex flex-col">
          <span className="akata-title-medium name">{name}</span>
          <p className="akata-text-small post">{post}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
