import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./about-teams.scss";
import { AboutTeamsType } from "@/app/types/about-team.type";

const AboutTeams: React.FC<AboutTeamsType> = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        tabIndex={0}
        className="akata-about-teams fill-view "
        initial="close"
        animate="open"
        exit="close"
        variants={{
          open: { opacity: 1, transform: "translateY(0)" },
          close: { opacity: 0, transform: "translateY(20px)" },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="about-team-content container">
          <button onClick={onClose}>close</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default AboutTeams;
