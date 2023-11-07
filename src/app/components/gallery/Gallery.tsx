import React from "react";
import "./gallery.scss"
import {motion, AnimatePresence} from "framer-motion"
import Image from "next/image";
const Gallery: React.FC = () => {
    return(
        <div className="akata-gallery fill-view d-flex-center">
            <div className="gallery-container d-flex flex-col">
                <div className="gallery-container-shower">
                   <AnimatePresence>
                       <motion.div initial={{ opacity: 0, x: 40 }} animate={{opacity: 1, x: 0}}  exit={{opacity: 0, x: -40}} transition={{delay: .4}} className={"shower"}>
                           <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                                  width={800} height={543} className={"selected-image"}
                           />
                       </motion.div>
                   </AnimatePresence>
                </div>
                <div className="picture-list"></div>
            </div>
        </div>
    )
}
export default Gallery