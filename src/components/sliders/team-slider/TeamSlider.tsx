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
                Are you struggling to find the perfect IT partner? Are you
                hopelessly looking for someone who shares your bold dreams?
                Well, at AKATA GOAVANA we too dream big - it&apos;s in our DNA.
                For us, ambition knows no bounds. We&apos;ve always turned even
                our wildest visions into reality through sheer determination
              </p>
              <p className="akata-text-medium">
                We know dreams require equal parts inspiration and dedication.
                Our role is to supply the tools, insight and support to bridge
                the gap between vision and achievement. We pledge to walk this
                path with you, taking purposeful steps powered by creativity,
                passion and strategic thinking. With open communication and
                trust, we remove doubt, unlock potential and make your goals
                attainable.
              </p>
              <p className="akata-text-medium">
                We help all dreams take root and grow. We invite you to share
                your aspirations with us, so we can cultivate success in
                partnership. When dreams are planted together, the harvest is
                boundless.
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
