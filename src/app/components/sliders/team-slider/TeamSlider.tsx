"use client";
import React from "react"
import {motion} from "framer-motion"

import "./team-slider.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";


interface SliderProps {
    onClose: () => void
}

const TeamSlider: React.FC<SliderProps> = ({onClose}) => {
    return (
        <motion.div initial={{opacity: 0, y: 80}} animate={{opacity: 1, y: 0}} className="akata-team-slider fill-view">
            <div className="main-content">
                <div className="slider-container container d-flex-space-between">
                    <strong className="akata-title-medium profile-name">RAMIANDRISOA ANDRIAMANDRATO PACKTRICK
                        (BODGE)</strong>
                </div>
                <button onClick={onClose} className={"btn-close-slider"}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
        </motion.div>
    )
}
export default TeamSlider