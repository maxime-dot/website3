"use client";
import React, {useState} from "react"
import {motion} from "framer-motion"

import "./team-slider.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Button from "@/app/components/button/normal/Button";
import LoadingModal from "@/app/components/modal-lets-talk/LoadingModal";
import Image from "next/image";

const Modal = dynamic(() => import("@/app/components/modal-lets-talk/ModalLetsTalk"), {
    loading: () => <LoadingModal/>
})


interface SliderProps {
    onClose: () => void
}

const TeamSlider: React.FC<SliderProps> = ({onClose}) => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseMOdal = () => {
        setOpenModal(false)
    }
    return (
        <motion.div initial={{opacity: 0, y: 80}} animate={{opacity: 1, y: 0}} className="akata-team-slider fill-view">
            {openModal && <Modal onClose={handleCloseMOdal}/>}
            <div className="main-content">
                <div className="slider-container container d-flex-space-between">
                    <div className="profile-pics-container">
                        <Image src={"/images/teams/plant-shape.png"} alt={"CEO Profile..."} width={1499} height={873}
                               className={"shape"}/>
                        <motion.div initial={{opacity: 0, x: 40}} animate={{opacity: 1, x: 0}}
                                    transition={{duration: .3, delay: .3}} className="main-container">
                            <Image src={"/images/teams/ceo.png"} alt={"CEO Profile..."} width={1499} height={873}
                                   className={"picture"}/>
                        </motion.div>
                    </div>
                    <motion.strong initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}
                                   transition={{delay: .4}} className="akata-title-medium profile-name">RAMIANDRISOA
                        Andriamandranto Patrick
                        (BODGE)
                    </motion.strong>
                    <div className="profile-words d-flex flex-col">
                        <motion.strong initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}}
                                       transition={{duration: .3, delay: .1}}
                                       className={"profile-post akata-title-medium"}>CEO
                        </motion.strong>
                        < motion.small initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}
                                       transition={{duration: .3, delay: .2}}
                                       className={"profile-post-acronym akata-text-medium"}>Chef Executive Officer
                        </motion.small>
                        <motion.p initial={{opacity: 0, x: 40}} animate={{opacity: 1, x: 0}}
                                  transition={{delay: .4}} className={"akata-text-medium words"}>I will
                            take the Reunionese singer Blacko&apos;s
                            words: “live his dreams are about existing”. Every day offers us the opportunity to exist,
                            to expand our dreams and to grow with. Dreaming will only lead to little, but if you share
                            your dreams with other people, you are on the right way to make them come true. The more you
                            share your dream and more it becomes too close to the reality.
                        </motion.p>
                        <motion.p initial={{opacity: 0, x: 40}} animate={{opacity: 1, x: 0}}
                                  transition={{delay: .5}} className={"akata-text-medium words"}>
                            Don’t stay in your dreams anymore. Go and share them so that they grow and become a GOAVANA
                            reality, with a GOAVANA team, during a GOAVANA journey, by writing a GOAVANA story…You need
                            heart and mind when you’re living your dream. The heart gives energy (motivation, ambition,
                            source, emotion…) and the `mind gives quality, professionalism, improvement, rebirth,
                            questioning, contestation and clarity. The mind is there to create means and find solutions
                            while making plans and executing actions.
                        </motion.p>
                        <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}
                                    transition={{duration: .3, delay: .6}}
                                    className="social-link-group d-flex flex-row">
                            <Link href={"https://www.facebook.com"} className={"link"} passHref={true}
                                  target={"_blank"}>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                            <Link href={"https://www.facebook.com"} className={"link"} passHref={true}
                                  target={"_blank"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                            <Link href={"https://www.facebook.com"} className={"link"} passHref={true}
                                  target={"_blank"}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </motion.div>
                        <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}
                                    transition={{delay: .8}}>
                            <Button content={"LET'S TALK"} ariaLabel={"Let's talk about your project requirement"}
                                    onClick={handleOpenModal} type={"button"} hoverType={"solid"}/>
                        </motion.div>
                    </div>
                </div>
                <button onClick={onClose} className={"btn-close-slider"}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
        </motion.div>
    )
}
export default TeamSlider