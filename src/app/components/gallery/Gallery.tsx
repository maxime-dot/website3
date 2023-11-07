import React from "react";
import "./gallery.scss"
import {motion, AnimatePresence} from "framer-motion"
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

interface GalleryProps {
    onClose?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({onClose}) => {
    return (
        <div
            className="akata-gallery fill-view d-flex-center">
            <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}
                        className="gallery-container d-flex flex-col">
                <div className="gallery-container-shower">
                    <AnimatePresence>
                        <motion.div initial={{opacity: 0, x: 40}} animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -40}} className={"shower"}>
                            <button type={"button"} onClick={onClose} className={"btn-close-gallery"}>
                                <FontAwesomeIcon icon={faCircleXmark}/>
                            </button>
                            <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                                   width={800} height={543} className={"selected-image"}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="picture-list">
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                    <Image src={"/images/teams/akata-team-5.png"} alt={"akata teams"}
                           width={800} height={543} className={"list-thumb"}
                    />
                </div>
            </motion.div>
        </div>
    )
}
export default Gallery