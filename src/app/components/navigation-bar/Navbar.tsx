"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      </div>
    </nav>
  );
};

export default Navbar;
