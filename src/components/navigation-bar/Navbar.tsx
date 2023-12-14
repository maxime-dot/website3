"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./navbar.scss";
const ModalLetsTalk = dynamic(
  () => import("../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  },
);
import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../button/normal/Button";
import LoadingModal from "../modal-lets-talk/LoadingModal";

const navigationLinks = [
  { name: "Home", path: "#home" },
  { name: "Testimonial", path: "#testimonial" },
  { name: "Services", path: "#services" },
  { name: "Projects", path: "#projects" },
  { name: "Teams", path: "#teams" },
  { name: "Articles", path: "#articles" },
  { name: "Contacts", path: "#contacts" },
];

const Navbar: React.FC = () => {
  const [hash, setHash] = useState("#");
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const updateActiveLink = () => {
    const windowHeight = window.innerHeight;

    const halfViewport = windowHeight / 2;

    const sections = navigationLinks;

    for (const section of sections) {
      const element = document.querySelector(section.path);

      if (element) {
        const elementTop = element.getBoundingClientRect().top;

        if (
          elementTop < halfViewport &&
          elementTop + element.clientHeight > halfViewport
        ) {
          setActiveLink(section.name);
          break;
        }
      }
    }
  };

  useEffect(() => {
    updateActiveLink();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveLink);
    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  const renderLinks = () => {
    return navigationLinks.map((link, index) => (
      <Link
        key={index}
        href={link.path}
        title={`Akata ${link.name}`}
        onClick={() => setHash(link.path)}
        className={"w-100 " + (activeLink === link.name ? "active" : "")}
      >
        {link.name}
      </Link>
    ));
  };

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsDropdownMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="akata-navbar d-flex-center w-100"
    >
      <div className="container navbar-content d-flex-space-between">
        <Link href={"/"} className="navbar-brand">
          <Image
            priority
            src={"/images/logo-akata.avif"}
            alt="Logo Akata"
            width={49}
            height={49}
            className="brand"
          />
        </Link>
        <div className="navbar-links">{renderLinks()}</div>
        <div className="navbar-call-to-action">
          <Button
            content="LET'S TALK"
            hoverType="solid"
            onClick={openModal}
            type="button"
            ariaLabel="Open let's talk modal to submit your project requirement"
          />
        </div>
        <button
          className="navbar-dropdown-button d-flex-center"
          onClick={toggleDropdownMenu}
          name="Menu"
          aria-label="Open extended menu"
        >
          <FontAwesomeIcon
            icon={isDropdownMenuOpen ? faXmark : faBars}
            className="button-icon"
          />
        </button>
        {isDropdownMenuOpen && (
          <div className="navbar-dropdown-menu">
            {renderLinks()}
            <button
              className="akata-button-custom w-100"
              name="let's talk"
              onClick={openModal}
              aria-label="Open let's talk modal to submit your project requirement"
            >
              LET&apos;S TALK
              <FontAwesomeIcon icon={faArrowRight} className="icon-button" />
            </button>
          </div>
        )}
      </div>
      {isModalOpen && <ModalLetsTalk onClose={closeModal} />}
    </motion.nav>
  );
};

export default Navbar;
