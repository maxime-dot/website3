import React from "react";
import { motion } from "framer-motion";
import "./expore-article.scss";

interface ExploreProps {
  onClose: () => void;
}
const ExploreArticles: React.FC<ExploreProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: 80 }}
      className="akata-explore-acticles fill-view"
    >
      <div className="container explore-articles-container">
        <button onClick={onClose}>go back</button>
        <div className="xd"></div>
      </div>
    </motion.div>
  );
};

export default ExploreArticles;
