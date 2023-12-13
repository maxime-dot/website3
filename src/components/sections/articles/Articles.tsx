"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./articles.scss";
import ArticleCard from "../../cards/articles/ArticleCard";
import ArticleData from "@/data/articles.json";
import Link from "next/link";
import ArticleViewer from "../../article-viewer/ArticleViewer";

const Articles: React.FC = () => {
  const [openArticle, setOpenArticle] = useState(false);
  const [selecteArticle, setSelectedArticle] = useState(ArticleData[0]);

  const handleOpenArticle = (data: any) => {
    setOpenArticle(true);
    setSelectedArticle(data);
  };
  const handleCloseArticle = () => {
    setOpenArticle(false);
  };

  useEffect(() => {
    if (openArticle) {
      document.documentElement.classList.add("global-style");
      document.body.classList.add("global-style");
    } else {
      document.documentElement.classList.remove("global-style");
      document.body.classList.remove("global-style");
    }
  }, [openArticle]);
  return (
    <section className="akata-articles fill-view" id="articles">
      <AnimatePresence mode="wait">
        {openArticle && (
          <ArticleViewer onClose={handleCloseArticle} data={selecteArticle} />
        )}
      </AnimatePresence>
      <Image
        src={"/images/hand-robot-shape-data.png"}
        width={310}
        height={515}
        alt={`decorator`}
        className="robot-hand"
      />
      <div className="article-content container d-flex-center flex-col">
        <div className="content-title d-flex-center flex-col">
          <h2 className="akata-title-medium">
            EXPERIENCE <span>AKATA</span>’s adventure spirit
          </h2>
          <p className="akata-text-medium">
            Every day, we go the extra mile to take on new challenges and help
            you achieve your goals.
          </p>
        </div>
        <div className="article-content-list">
          {ArticleData.slice(0, 3).map((data, index) => (
            <ArticleCard
              key={index}
              date={data.date}
              content={data.content}
              title={data.title}
              readMore={() => handleOpenArticle(data)}
              imgSrc={data.imageSrc}
              smallContent={data.smallContent}
            />
          ))}

          <div className="expore-article d-flex-space-between flex-col">
            <p className="article-count">3 / 10</p>
            <Link
              href="/articles"
              className="btn-article-explore akata-title-medium"
            >
              EXPLORE MORE <span>CONTENT</span>
              <FontAwesomeIcon icon={faArrowRightLong} className="btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
