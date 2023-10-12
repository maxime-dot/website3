"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";
import Button from "../button/Button";
import ModalLetsTalk from "../modal-lets-talk/ModalLetsTalk";

const Links: { name: string; path: string }[] = [
  { name: "Home", path: "#" },
  { name: "Services", path: "#services" },
  { name: "Teams", path: "#teams" },
  { name: "Projects", path: "#projects" },
  { name: "Articles", path: "#articles" },
  { name: "Contacts", path: "#contacts" },
];

const Navbar: React.FC = () => {
  const [hash, setHash] = useState("#");
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const renderLinks = () => {
    return Links.map(({ name, path }, index) => (
      <Link
        key={index}
        href={path}
        title={`Akata ${name}`}
        onClick={() => setHash(path)}
        className={hash === path ? "active" : ""}
      >
        {name}
      </Link>
    ));
  };

  return (
    <nav className="akata-navbar d-flex-center">
      <div className="container navbar-content d-flex-space-between">
        <Link href={"/"} className="navbar-brand">
          <Image
            priority
            src={"/images/logo-akata.png"}
            alt="Logo Akata"
            width={49}
            height={49}
            className="brand"
          />
        </Link>
        <div className="navbar-links">{renderLinks()}</div>
        <Button
          title="LET'S TALK"
          hoverType="solid"
          onClick={() => setIsModalOpen(true)}
        />
        <button
          className="navbar-dropdown-button d-flex-center"
          onClick={toggleDropdownMenu}
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
              className="akata-button-custom"
              onClick={toggleDropdownMenu}
            >
              LET&apos;S TALK
              <FontAwesomeIcon icon={faArrowRight} className="icon-button" />
            </button>
          </div>
        )}
      </div>
      {isModalOpen && <ModalLetsTalk onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;
