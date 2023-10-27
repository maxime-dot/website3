import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./article-card.scss";
import { ArticleCardProps } from "@/app/types/article-card.type";
const ArticleCard: React.FC<ArticleCardProps> = ({
  date,
  title,
  content,
  readMore,
  imgSrc,
}) => {
  return (
    <div className="article-card d-flex flex-col">
      <Image
        src={imgSrc}
        alt="piv fianarantsoa"
        width={300}
        height={165}
        className="article-image"
      />
      <div className="article-card-content d-flex flex-col">
        <div className="article-card-body d-flex flex-col">
          <div className="title d-flex flex-col">
            <p className="article-card-date">{date}</p>
            <h4 className="article-card-title">{title}</h4>
          </div>
          <p className="article-card-text">{content}</p>
        </div>
        <button className="btn-readmore-article" onClick={readMore}>
          READ MORE{" "}
          <FontAwesomeIcon icon={faArrowRightLong} className="button-icon" />{" "}
        </button>
      </div>
    </div>
  );
};
export default ArticleCard;
