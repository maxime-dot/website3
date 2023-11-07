"use client";
import React from "react";
import "./team-list.scss"
import { motion } from "framer-motion"
const TeamList: React.FC = () => {
    return(
        <div className="akata-team-list d-flex-center flex-col">
            <motion.h2 initial={{opacity: 0, y: 20}}   whileInView={{opacity: 1, y: 0}} transition={{delay: .3}} viewport={{once: true}} className="akata-title-medium">Meet our exceptional <span>team</span></motion.h2>
            <motion.p  initial={{opacity: 0, y: 20}}   whileInView={{opacity: 1, y: 0}} transition={{delay: .3}} viewport={{once: true}} className="akata-text-medium team-title-description">Meet the exceptional clients who have chosen Akata Goavana for their IT needs. Our successful partnerships with these esteemed organizations showcase our dedication to excellence and innovation. Join our ever-expanding client family and let us lead you toward digital success</motion.p>
            <div className="list-content container">
                <div className="team-item"></div>
                <div className="team-item"></div>
                <div className="team-item"></div>
                <div className="team-item"></div>
                <div className="team-item"></div>
            </div>
        </div>
    )
}
export default TeamList;