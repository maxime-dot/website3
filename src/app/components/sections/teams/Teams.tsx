"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./teams.scss";
import Button from "../../button/normal/Button";
import ButtonOutline from "../../button/outline/ButtonOutline";

const Teams: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  return (
    <section className="akata-teams fill-view  container" id="teams">
      <div className="teams-intro d-flex flex-col">
        <div className="intro-title d-flex flex-col">
          <h1 className="akata-title-strong">
            Meet Our Exceptional <span>Team</span>
          </h1>
          <p className="akata-text-big team-intro-description">
            Get to know the talented individuals that make up the Akata Goavana
            team. Our dedicated experts bring a wealth of knowledge and passion
            to every project. Together, w&apos;re committed to delivering IT
            solutions that drive your success. Explore the faces behind our
            innovation.
          </p>
          <div className="profile-social-link d-flex flex-row">
            <Link
              href={"https://www.facebook.com"}
              passHref={true}
              className="social-link"
            >
              <FontAwesomeIcon icon={faHome} className="link-icon" />
            </Link>
            <Link
              href={"https://www.facebook.com"}
              passHref={true}
              className="social-link"
            >
              <FontAwesomeIcon icon={faHome} className="link-icon" />
            </Link>
          </div>
        </div>
        <div className="intro-ca-button d-flex flex-row">
          <Button type="button" ariaLabel="send you project requirement" content="LET'S TALK" onClick={handleOpenModal} hoverType="shadowed"  />
          <ButtonOutline ariaLabel="Get better to know you teams" content="ABOUT US" onClick={handleOpenModal} title="Get Better to know your teams" />
        </div>
      </div>
      <div className="teams-admin-member"></div>
    </section>
  );
};
export default Teams;
