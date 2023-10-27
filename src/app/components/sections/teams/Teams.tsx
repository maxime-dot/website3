"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "./teams.scss";
import Button from "../../button/normal/Button";
import ButtonOutline from "../../button/outline/ButtonOutline";

const Teams: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
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
              target="_blank"
              title="Akata Goavana Facebook Account"
            >
              <FontAwesomeIcon icon={faHome} className="link-icon" />
            </Link>
            <Link
              href={"https://www.linkedin.com"}
              passHref={true}
              className="social-link"
              target="_blank"
              title="Akata Goavana Linkedin Account"
            >
              <FontAwesomeIcon icon={faHome} className="link-icon" />
            </Link>
          </div>
        </div>
        <div className="intro-ca-button d-flex flex-row">
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
            onClick={handleOpenModal}
            title="Get Better to know your teams"
          />
        </div>
      </div>
      <div className="teams-admin-member">
        <div className="admin-ceo-words d-flex flex-col">
          <div className="profile-info">
            <p className="ceo-name">
              RAMIANDRISOA Andriamandranto Patrick ( BODGE)
            </p>
            <p className="ceo-post">CEO</p>
          </div>
          <p className="profile-words akata-text-medium">
            Living one's dreams is a form of existence. By sharing these dreams
            with others, we bring them closer to reality. The more we share our
            dreams, the more they become concrete and achievable.
          </p>
          <div className="profile-pics">
            <Image
              src={"/images/teams/Bodge.png"}
              width={211}
              height={304}
              alt={`CEO Profile pics`}
              className="profile-pics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Teams;
