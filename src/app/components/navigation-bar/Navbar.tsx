"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";
import Button from "../button/Button";

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

  return (
    <nav className="akata-navbar">
      <div className="container navbar-content">
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
        <div className="navbar-links">
          {Links &&
            Links.length > 0 &&
            Links.map(({ name, path }, index) => (
              <Link
                key={index}
                href={path}
                title={`Akata ${name}`}
                onClick={() => setHash(path)}
                className={hash === path ? "active" : ""}
              >
                {name}
              </Link>
            ))}
        </div>
        <Button title="LET'S TALK" hoverType="solid" />
        <button
          className="navbar-dropdown-button"
          onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
        >
          {isDropdownMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} className="button-icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="button-icon" />
          )}
        </button>

        {isDropdownMenuOpen ? (
          <div className="navbar-dropdown-menu">
            {Links &&
              Links.length > 0 &&
              Links.map(({ name, path }, index) => (
                <Link
                  key={index}
                  href={path}
                  title={`Akata ${name}`}
                  onClick={() => setHash(path)}
                  className={hash === path ? "active" : ""}
                >
                  {name}
                </Link>
              ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
