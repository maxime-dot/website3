"use client";
import React, { useState } from "react";
import "./header.scss";
import Button from "../button/Button";
import ModalLetsTalk from "../modal-lets-talk/ModalLetsTalk";
import ButtonOutlineIconified from "../button-outline-iconified/ButtonOutlineIconified";
const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="akata-header fill-view d-flex-space-between container">
      {isModalOpen && <ModalLetsTalk onClose={() => setIsModalOpen(false)} />}
      <div className="header-content d-flex flex-col">
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
          <ButtonOutlineIconified title="Get to Know Us Better" />
        </div>
      </div>
    </header>
  );
};

export default Header;
