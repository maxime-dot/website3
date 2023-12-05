import React from "react";
import "./service-card.scss";
import {ServiceCardType} from "@/types/service-card.type";
import Button from "@/components/button/normal/Button";
const ServiceCard: React.FC<ServiceCardType> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div className="service-card w-100 d-flex flex-col">
      <h3 className="akata-title-medium card-title">{title}</h3>
      <p className="akata-text-medium card-description">{description}</p>
      <Button
        ariaLabel="Let's talk"
        content="Let's talk"
        onClick={onClick}
        type="button"
        hoverType="solid"
      />
    </div>
  );
};

export default ServiceCard;
