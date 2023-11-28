import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import "./article-viewer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ArticleMiniCard from "../cards/articles-mini-card/ArticlesMiniCard";
import ArticleData from "@/data/articles.json";
import {ArticleViewerProps} from "@/types/article-viewer.type";
import {artView} from "@/animation/animation";

const ArticleViewer: React.FC<ArticleViewerProps> = ({onClose}) => {
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
            <span className="article-date">december 21, 2021</span>
            <h2 className="article-title">
              Futurella Madagascar 301 office’s inauguration
            </h2>
            <Image
              src={"/images/articles/futurella.png"}
              loading="lazy"
              width={1064}
              height={533}
              alt="futurella article - poster "
              className="article-poster"
            />
            <div className="article-text d-flex-space-between">
              <div className="article-text-content w-100">
                <div className="content-part d-flex flex-col">
                  <h4 className="content-title">
                    1 - Futurella Madagascar Office Inauguration: A New Era of
                    Sustainability
                  </h4>
                  <p className="akata-text-medium">
                    December 21, 2021, will be remembered as a significant day
                    in Madagascar&apos;s history, marked by the inauguration of
                    Futurella Madagascar&apos;s office, symbolizing a renewed
                    commitment to sustainability and clean energy. This
                    ceremony, held under the radiant sun, brought together key
                    players in the renewable energy, education, and sustainable
                    development sectors. The centerpiece of this day was
                    undoubtedly the L’École d’Été PV Fianara 2021 a remarkable
                    initiative organized by the esteemed Centre d’Employabilité
                    Francophone, in close collaboration with Fianarantsoa
                    University and the dynamic Association FianaraLab. This
                    summer school not only highlighted the crucial importance of
                    education in sustainable energy but also served as a
                    platform for discussing sustainability-related issues in
                    Madagascar. The fruitful partnership between these renowned
                    institutions resulted in a meaningful inauguration. It
                    symbolized the collective determination to advance the
                    energy transition and to implement innovative solutions to
                    meet Madagascar&apos;s energy needs.
                  </p>
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
                      initial={{opacity: 0, x: 100}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{delay: 0.5}}
                      viewport={{once: true}}
                    >
                      {" "}
                      <ArticleMiniCard
                        date={data.date}
                        imgSrc={data.imageSrc}
                        title={data.title}
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
