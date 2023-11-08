"use client";
import React from "react";
import "./team-list.scss"
import {motion} from "framer-motion"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faGithub, faDribbble} from "@fortawesome/free-brands-svg-icons";
import TeamData from "@/app/data/team-list.json"
import Link from "next/link";
import Image from "next/image";

const TeamList: React.FC = () => {
    return (
        <div className="akata-team-list d-flex-center flex-col">
            <motion.h2 initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: .3}}
                       viewport={{once: true}} className="akata-title-medium">Meet our exceptional <span>team</span>
            </motion.h2>
            <motion.p initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: .3}}
                      viewport={{once: true}} className="akata-text-medium team-title-description">Meet the exceptional
                clients who have chosen Akata Goavana for their IT needs. Our successful partnerships with these
                esteemed organizations showcase our dedication to excellence and innovation. Join our ever-expanding
                client family and let us lead you toward digital success
            </motion.p>
            <div className="list-content container">

                {TeamData.map((data, index) => (
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{delay: .3}} className="team-item d-flex-space-between flex-col" key={`team-${index}`}>
                        <div className="profile-pics">
                            <Image src={data.profileImage ? data.profileImage : "/images/teams/team-profile/default.png"} alt={`${data.firstName} ${data.lastName} profile`} width={600} height={600} className={"pics"}/>
                        </div>
                        <div className="profile-info d-flex flex-col">
                            <span className={"profile-name"}>{data.firstName}  {data.lastName}</span>
                            <span className={"profile-post"}>{data.post}</span>
                        </div>
                        <div className="profile-social-link d-flex flex-row">
                            {data.socialLink.facebook &&
                                <Link href={data.socialLink.facebook} passHref={true} target={"_blank"}
                                      className={"link-item"}>
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </Link>}
                            {data.socialLink.linkedin &&
                                <Link href={data.socialLink.linkedin} passHref={true} target={"_blank"}
                                      className={"link-item"}>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Link>}
                            {
                                data.socialLink.github &&
                                <Link href={data.socialLink.github} passHref={true} target={"_blank"}
                                      className={"link-item"}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </Link>
                            }
                            {
                                data.socialLink.dribble &&
                                <Link href={data.socialLink.dribble} passHref={true} target={"_blank"}
                                      className={"link-item"}>
                                    <FontAwesomeIcon icon={faDribbble}/>
                                </Link>
                            }
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    )
}
export default React.memo(TeamList);