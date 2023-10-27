"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./articles.scss";
import ArticleCard from "../../cards/articles/ArticleCard";
import ArticleData from "../../../data/articles.json";
const Articles: React.FC = () => {
  const [openArticle, setOpenArticle] = useState(false);
  return (
    <section className="akata-articles fill-view" id="articles">
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
            <span>Articles</span> That Illuminate
          </h2>
          <p className="akata-text-medium">
            Dive into our repository of enlightening articles. Our team of
            experts shares in-depth insights, industry trends, and cutting-edge
            IT knowledge. Explore a wealth of information that can empower your
            business and keep you informed about the latest developments in
            technology
          </p>
        </div>
        <div className="article-content-list">
          {ArticleData.map((data, index) => (
            <ArticleCard
              key={index}
              date={data.date}
              content={data.content}
              title={data.title}
              readMore={() => setOpenArticle(true)}
              imgSrc={data.imageSrc}
            />
          ))}

          <div className="expore-article d-flex-space-between flex-col">
            <p className="article-count">3 / 10</p>
            <button className="btn-article-explore akata-title-medium">
              EXPLORE MORE <span>CONTENT</span>
              <FontAwesomeIcon icon={faArrowRightLong} className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
