import React from "react";
import "./service-card.scss";
import {ServiceCardType} from "@/types/service-card.type";
const ServiceCard: React.FC<ServiceCardType> = ({title, description}) => {
  return (
    <div className="service-card w-100 d-flex flex-col">
      <h3 className="akata-title-medium card-title">{title}</h3>
      <p className="akata-text-medium card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
