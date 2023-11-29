import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import "./article-card.scss";
import {ArticleCardProps} from "@/types/article-card.type";
import {articleCardAnimation} from "@/animation/animation";
import {truncate} from "@/helpers/truncate";
const ArticleCard: React.FC<ArticleCardProps> = ({
  date,
  title,
  content,
  readMore,
  imgSrc,
}) => {
  return (
    <motion.div
      className="article-card d-flex flex-col"
      variants={articleCardAnimation}
      initial="initial"
      whileInView={"enter"}
      exit={"exit"}
      transition={{duration: 0.3, delay: 0.3}}
      viewport={{once: true}}
    >
      <Image
        src={imgSrc}
        alt="piv fianarantsoa"
        width={300}
        height={165}
        className="article-image"
      />
      <div className="article-card-content d-flex-space-between flex-col">
        <div className="article-card-body d-flex flex-col">
          <div className="title d-flex flex-col">
            <p className="article-card-date">{date}</p>
            <h4 className="article-card-title">{title}</h4>
          </div>
          <p className="article-card-text">{truncate(content, 277)}</p>
        </div>
        <button className="btn-readmore-article" onClick={readMore}>
          READ MORE{" "}
          <FontAwesomeIcon icon={faArrowRightLong} className="button-icon" />{" "}
        </button>
      </div>
    </motion.div>
  );
};
export default ArticleCard;
