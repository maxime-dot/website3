"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./header.scss";
import Button from "../button/Button";
import ModalLetsTalk from "../modal-lets-talk/ModalLetsTalk";
import ButtonOutlineIconified from "../button-outline-iconified/ButtonOutlineIconified";
import VideoPlayer from "../video-player/VideoPlayer";
const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <header
      className="akata-header fill-view d-flex-space-between container"
      id="home"
    >
      {playVideo && (
        <VideoPlayer
          id="4jcOdfQxVY0"
          title="AKATA GOAVANA"
          onClose={() => setPlayVideo(false)}
        />
      )}
      {isModalOpen && <ModalLetsTalk onClose={() => setIsModalOpen(false)} />}
      <div className="header-content d-flex flex-col w-100">
        <div className="content-text d-flex flex-col">
          <h1 className="akata-title-strong">
            lET’S US TURN YOU <span>DREAM</span> INTO REALITY
          </h1>
          <p className="akata-text-big">
            At Akata Goavana, we are dedicated to the well-being of your IT
            infrastructure. Our experts are here to provide exceptional care for
            your systems. Trust in our expertise to keep them running smoothly.
          </p>
        </div>
        <div className="content-ca-button d-flex flex-row">
          <Button
            type="button"
            title="LET'S TALK"
            hoverType="shadowed"
            onClick={() => setIsModalOpen(true)}
          />
          <ButtonOutlineIconified
            title="Get to Know Us Better"
            name="Play akata's video"
            onClick={() => setPlayVideo(true)}
          />
        </div>
      </div>
      <div className="header-hero d-flex-center w-100">
        <Image
          src={"/images/maki.svg"}
          alt="Akata goavana, hero image"
          className="hero-image"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
    </header>
  );
};

export default Header;
