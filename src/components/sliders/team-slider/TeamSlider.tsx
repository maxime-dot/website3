"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import "./team-slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Button from "@/components/button/normal/Button";
import LoadingModal from "@/components/modal-lets-talk/LoadingModal";
import Image from "next/image";

const Modal = dynamic(
  () => import("@/components/modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  },
);

interface SliderProps {
  onClose: () => void;
}

const TeamSlider: React.FC<SliderProps> = ({ onClose }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="akata-team-slider fill-view"
    >
      {openModal && <Modal onClose={handleCloseModal} />}

      <div className="team-slider-content ">
        <div className="content-main container">
          {/* float close button */}
          <button className={"btn-close-slider"} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>

          {/* main container element */}
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            key={"animated-title"}
            className={"akata-title-medium team-name"}
          >
            RAMIANDRISOA Andriamandranto Patrick (BODGE)
          </motion.h4>
          <div className="team-more-info d-flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="info-post"
            >
              <abbr
                title="Chef Executive Officier"
                className={"akata-title-medium post-name"}
              >
                CEO
              </abbr>
              <p className={"akata-text-small "}>Chef Executive Officer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              key={"animated-title"}
              className="info-word d-flex flex-col"
            >
              <p className="akata-text-medium">
                I will take the Reunionese singer Blacko&apos;s words: “live his
                dreams are about existing”. Every day offers us the opportunity
                to exist, to expand our dreams and to grow with. Dreaming will
                only lead to little, but if you share your dreams with other
                people, you are on the right way to make them come true. The
                more you share your dream and more it becomes too close to the
                reality
              </p>
              <p className="akata-text-medium">
                Don’t stay in your dreams anymore. Go and share them so that
                they grow and become a <strong>GOAVANA</strong> reality, with a
                GOAVANA team, during a GOAVANA journey, by writing a GOAVANA
                story…You need heart and mind when you’re living your dream. The
                heart gives energy (motivation, ambition, source, emotion…) and
                the `mind gives quality, professionalism, improvement, rebirth,
                questioning, contestation and clarity. The mind is there to
                create means and find solutions while making plans and executing
                actions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
              key={"animated-title"}
              className="info-social-network d-flex flex-row"
            >
              <Link
                href={"https://www.facebook.com/profile.php?id=61553836774106"}
                className={"link"}
                passHref={true}
                target={"_blank"}
                title={"Ramiandrisoa Andriamandranto Patrick facebook account."}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>

              <Link
                href={
                  "https://www.linkedin.com/in/ramiandrisoa-andriamandranto-patrick-bodge-9a273310b/"
                }
                className={"link"}
                passHref={true}
                target={"_blank"}
                title={"Ramiandrisoa Andriamandranto Patrick LinkedIn account."}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8 }}
              key={"animated-title"}
              className="info-profile-action-button"
            >
              <Button
                content={"LET'S TALK"}
                ariaLabel={"Let's talk about your project requirement"}
                onClick={handleOpenModal}
                type={"button"}
                hoverType={"solid"}
              />
            </motion.div>
          </div>

          {/* center element profile pics */}
          <div className="slider-profile-center">
            <div className="profile-center-pics">
              <Image
                src={"/images/teams/plant-shape.avif"}
                alt={"CEO Profile..."}
                width={400}
                height={400}
                className={"shape"}
              />

              <Image
                src={"/images/teams/ceo.avif"}
                alt={"CEO Profile..."}
                width={680}
                height={873}
                className={"picture"}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default TeamSlider;
