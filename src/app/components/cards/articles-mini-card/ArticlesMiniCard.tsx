import React from "react";
import "./articles-mini-card.scss";
import {truncate} from "@/helpers/truncate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {MiniCardProps} from "@/types/mini-card.type";

const ArticleMiniCard: React.FC<MiniCardProps> = ({imgSrc, date, title}) => {
  return (
    <div className="article-mini-card w-100 d-flex flex-row">
      <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      <div className="mini-card-profile">
        <Image
          src={imgSrc}
          className="profile-pics"
          alt="futurella event"
          width={109}
          height={109}
        />
      </div>
      <div className="card-content d-flex flex-col">
        <span className=" akata-text-small date">{date}</span>
        <h5 className=" akata-text-medium title">{truncate(title, 43)}</h5>
      </div>
    </div>
  );
};

export default ArticleMiniCard;
