"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./article-viewer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ArticleMiniCard from "../cards/articles-mini-card/ArticlesMiniCard";
import ArticleData from "@/data/articles.json";
import { ArticleViewerProps } from "@/types/article-viewer.type";
import { artView } from "@/animation/animation";

const ArticleViewer: React.FC<ArticleViewerProps> = ({ onClose, data }) => {
  const [mainData, setMainData] = useState(data);
  return (
    <motion.div
      variants={artView}
      animate="enter"
      exit="exit"
      initial="initial"
      className="article-viewer fill-view "
    >
      <div className="container viewer-content">
        <button onClick={onClose} className="btn-close d-flex-center">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-btn" /> Go back
        </button>
        <div className="viewer-article-body d-flex-center flex-col w-100">
          <div className="article w-100">
            <span className="article-date">{mainData.date}</span>
            <h2 className="article-title">{mainData.title}</h2>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              key={mainData.imageSrc}
            >
              <Image
                src={mainData.imageSrc}
                loading="lazy"
                width={1064}
                height={533}
                alt="futurella article - poster "
                className="article-poster"
              />
            </motion.div>
            <div className="article-text d-flex-space-between">
              <div className="article-text-content w-100">
                <div className="content-part d-flex flex-col">
                  <div dangerouslySetInnerHTML={{ __html: mainData.content }} />
                </div>
              </div>
              <div className="article-suggestion w-100 d-flex flex-col">
                <h4 className="akata-title-medium recent-article-title">
                  Recent Articles
                </h4>
                <div className="suggestion-card d-flex flex-col">
                  {ArticleData.slice(0, 3).map((data, index) => (
                    <motion.div
                      key={`article-item-${index}`}
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {" "}
                      <ArticleMiniCard
                        date={data.date}
                        imgSrc={data.imageSrc}
                        title={data.title}
                        onClick={() => setMainData(data)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default React.memo(ArticleViewer);
