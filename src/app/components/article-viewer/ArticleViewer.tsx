import React from "react";
import { motion } from "framer-motion";
import "./article-viewer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ArticleProps {
  onClose: () => void;
}
const ArticleViewer: React.FC<ArticleProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default React.memo(ArticleViewer);
