import React from "react";
import Image from "next/image";
import "./articles.scss";
const Articles: React.FC = () => {
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
          <div className="article-card"></div>
          <div className="article-card"></div>
          <div className="article-card"></div>
          <div className="article-card"></div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
