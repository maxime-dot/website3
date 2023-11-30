import React from "react";
import "./testimonial-card.scss";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import { testimonialCardAnimation } from "@/animation/animation";

interface CardProps {
  name: string;
  profile: string;
  testimonials: string;
  post: string;
  onClick: () => void;
}

const TestimonialCard: React.FC<CardProps> = ({
  name,
  profile,
  post,
  testimonials,
  onClick,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={testimonialCardAnimation}
        initial={"initial"}
        whileInView={"animate"}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        className="testimonial-card d-flex flex-col"
        onClick={onClick}
      >
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
      </m.div>
    </LazyMotion>
  );
};

export default TestimonialCard;
