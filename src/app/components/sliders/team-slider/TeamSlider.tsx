"use client";
import React from "react"
import {motion} from "framer-motion"
import "./team-slider.scss"

interface SliderProps {
    onClose: () => void
}

const TeamSlider: React.FC<SliderProps> = ({onClose}) => {
    return (
        <motion.div initial={{opacity: 0, y: 80}} animate={{opacity: 1, y: 0}} className="akata-team-slider fill-view">
            <button onClick={onClose}>close</button>
        </motion.div>
    )
}
export default TeamSlider