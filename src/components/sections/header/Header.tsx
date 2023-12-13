"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

const Button = dynamic(() => import("../../button/normal/Button"));
const ModalLetsTalk = dynamic(
  () => import("../../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  },
);
import { motion } from "framer-motion";
import ButtonOutlineIconified from "../../button/outline-iconified/ButtonOutlineIconified";
import ButtonCaFloat from "../../button/ca-float/ButtonCaFloat";
import LoadingModal from "../../modal-lets-talk/LoadingModal";

const VideoPlayer = dynamic(() => import("../../video-player/VideoPlayer"), {
  loading: () => <LoadingModal />,
});
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
          id="ttbqSxLQJ6c"
          title="AKATA GOAVANA"
          onClose={() => setPlayVideo(false)}
        />
      )}
      <ButtonCaFloat
        FontAwesome={faRocket}
        ariaLabel="Submit project requirement"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && <ModalLetsTalk onClose={() => setIsModalOpen(false)} />}
      <div className="header-content d-flex flex-col w-100">
        <div className="content-text d-flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="akata-title-strong"
          >
            THE <span>CASH COW</span> OF YOUR BUSINESS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="akata-text-big"
          >
            At AKATA GOAVANA, we are driving consistent and sustainable revenue
            for your company with our innovative IT solutions. Our customized
            solutions go beyond addressing current challenges; they proactively
            anticipate and overcome the opportunities that lie ahead.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="content-ca-button d-flex flex-row"
        >
          <Button
            type="button"
            content="LET'S TALK"
            hoverType="shadowed"
            onClick={() => setIsModalOpen(true)}
            ariaLabel="Open let's talk modal to submit your project requirement"
          />
          <ButtonOutlineIconified
            title="Get to Know Us Better"
            name="Play akata's video"
            onClick={() => setPlayVideo(true)}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="header-hero d-flex-center w-100"
      >
        <Image
          src={"/images/maki.avif"}
          alt="Akata goavana, hero image"
          className="hero-image"
          priority={true}
          width={600}
          height={600}
        />
      </motion.div>
    </header>
  );
};

export default React.memo(Header);
