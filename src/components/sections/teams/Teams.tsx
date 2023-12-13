"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import LoadingModal from "../../modal-lets-talk/LoadingModal";
import AdminTeamData from "@/data/admin-teams.json";
import ContactData from "@/data/contacts.json";

const ModalLetsTalk = dynamic(
  () => import("../../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  },
);
const TeamSlider = dynamic(
  () => import("@/components/sliders/team-slider/TeamSlider"),
  {
    loading: () => <LoadingModal />,
  },
);

import "./teams.scss";
import Button from "../../button/normal/Button";
import ButtonOutline from "../../button/outline/ButtonOutline";

const Teams: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);
  useEffect(() => {
    if (openSlider) {
      document.documentElement.classList.add("global-style");
      document.body.classList.add("global-style");
    } else {
      document.documentElement.classList.remove("global-style");
      document.body.classList.remove("global-style");
    }
  }, [openSlider]);
  const handleOpenSlider = () => {
    setOpenSlider(true);
  };
  const handleCloseSlider = () => {
    setOpenSlider(false);
  };

  const router = useRouter();

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenAboutTteam = () => {
    router.push("/teams");
  };
  return (
    <section className="akata-teams fill-view  container" id="teams">
      {openModal && <ModalLetsTalk onClose={handleCloseModal} />}
      <AnimatePresence>
        {openSlider && <TeamSlider onClose={handleCloseSlider} />}
      </AnimatePresence>

      <div className="teams-intro d-flex flex-col">
        <div className="intro-title d-flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="akata-title-strong"
          >
            Our Team,Your <span>success</span> guarantee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="akata-text-big team-intro-description"
          >
            Secure your investment ! Our dedicated team works to maximize your
            return on investment through attention to detail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.4 }}
            className="profile-social-link d-flex flex-row"
          >
            <Link
              href={ContactData.socialLink.facebook}
              passHref={true}
              className="social-link"
              target="_blank"
              title="Akata Goavana Facebook Account"
            >
              <FontAwesomeIcon icon={faFacebook} className="link-icon" />
            </Link>
            <Link
              href={ContactData.socialLink.linkedin}
              passHref={true}
              className="social-link"
              target="_blank"
              title="Akata Goavana Linkedin Account"
            >
              <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
            </Link>
            <Link
              href={ContactData.socialLink.instagram}
              passHref={true}
              className="social-link"
              target="_blank"
              title="Akata Goavana Instagram Account"
            >
              <FontAwesomeIcon icon={faInstagram} className="link-icon" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="intro-ca-button d-flex flex-row"
        >
          <Button
            type="button"
            ariaLabel="send you project requirement"
            content="LET'S TALK"
            onClick={handleOpenModal}
            hoverType="shadowed"
          />
          <ButtonOutline
            ariaLabel="Get better to know you teams"
            content="ABOUT US"
            onClick={handleOpenAboutTteam}
            title="Get Better to know your teams"
          />
        </motion.div>
      </div>
      <div className="teams-admin-member d-flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.2, duration: 0.3 }}
          className="admin-ceo-words d-flex flex-col"
          onClick={handleOpenSlider}
        >
          <div className="profile-info">
            <p className="ceo-name">
              RAMIANDRISOA Andriamandranto Patrick ( BODGE)
            </p>
            <p className="ceo-post">CEO</p>
          </div>
          <p className="profile-words akata-text-medium">
            Your most sacred dreams hold the key to an extraordinary life —
            wealth, influence, legacy and more. Boldly share them with the right
            people and witness their transformation into resounding success you
            never thought possible.
          </p>
          <div className="profile-pics">
            <Image
              src={"/images/teams/Bodge.avif"}
              width={211}
              height={304}
              alt={`CEO Profile pics`}
              className="profile-image"
            />
            <Image
              src={"/images/teams/bodge-plant.avif"}
              width={211}
              height={304}
              alt={`CEO Profile pics`}
              className="plant-pics"
            />
          </div>
        </motion.div>
        {/* team member list */}
        <div className="admin-teams-list d-flex flex-col">
          {AdminTeamData.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                delay: index / 10,
              }}
              className="team d-flex flex-row"
              key={`admin-team-${index}`}
            >
              <Image
                src={data.profileSrc}
                width={600}
                height={600}
                alt={`${data.name}`}
                className="profile-pics"
              />
              <div className="team-info d-flex flex-col">
                <p className="info-name akata-title-medium">{data.name}</p>
                <p className="info-post akata-text-small">{data.post}</p>
              </div>
            </motion.div>
          ))}
          <div className="team-ca-button d-flex flex-row">
            <Button
              type="button"
              ariaLabel="send you project requirement"
              content="LET'S TALK"
              onClick={handleOpenModal}
              hoverType="shadowed"
            />
            <ButtonOutline
              ariaLabel="Get better to know you teams"
              content="ABOUT US"
              onClick={handleOpenAboutTteam}
              title="Get Better to know your teams"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Teams;
