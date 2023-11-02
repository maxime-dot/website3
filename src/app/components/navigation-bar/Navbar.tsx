"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";
import Button from "../button/normal/Button";
import LoadingModal from "../modal-lets-talk/LoadingModal";

import { LinksType } from "@/app/types/navlink.type";
import Links from "../../data/navigation-links.json";

const ModalLetsTalk = dynamic(
  () => import("../modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  }
);

const Navbar: React.FC = () => {
  const [hash, setHash] = useState("#home");
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const renderLinks = () => {
    return Links.map((data: LinksType, index) => (
      <Link
        key={index}
        href={data.path}
        title={`Akata ${data.name}`}
        onClick={() => setHash(data.path)}
        className={"w-100 " + (hash === data.path ? "active" : "")}
      >
        {data.name}
      </Link>
    ));
  };

  return (
    <nav className="akata-navbar d-flex-center w-100">
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
    </nav>
  );
};

export default React.memo(Navbar);
