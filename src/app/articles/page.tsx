"use client";
import Link from "next/link";
import "./articles-page.scss";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoadingModal from "../components/modal-lets-talk/LoadingModal";
import { useState } from "react";
import Button from "../components/button/normal/Button";
import ArticleData from "../data/articles.json";
import ArticleCard from "../components/cards/articles/ArticleCard";
const ModalLetsTalk = dynamic(
  () => import("../components/modal-lets-talk/ModalLetsTalk"),
  {
    loading: () => <LoadingModal />,
  }
);
export default function Page() {
  const [isOpenModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  const openModal = () => {
    setOpenModal(true);
  };
  return (
    <div className="akata-articles-page container">
      {isOpenModal && <ModalLetsTalk onClose={closeModal} />}
      <Link href={"/#articles"} className="return-link">
        <FontAwesomeIcon icon={faArrowLeft} className="link-icon" />
        Go back
      </Link>
      <header className="akata-article-header w-100">
        <div className="header-title d-flex flex-col">
          <div className="title-text d-flex flex-col">
            <h1 className="akata-title-strong">
              Explore the <span> World of Innovation</span>
            </h1>
            <p className="akata-text-big">
              Dive into our captivating articles to stay at the forefront of
              technology and innovation. Explore exciting topics and in-depth
              analyses that will inspire you to push boundaries. Join us on our
              quest for knowledge and inspiration
            </p>
          </div>
          <Button
            ariaLabel="Let's talk about your project requirement"
            content="LET'S TALK"
            onClick={openModal}
            type="button"
            hoverType="shadowed"
          />
        </div>
        <div className="header-article-suggestion d-flex-space-between flex-col">
          <div className="horizontal-article"></div>
          <div className="horizontal-article"></div>
        </div>
      </header>

      <div className="article-lists">
        <h2 className="list-title">Explore all articles</h2>
        <div className="list-card">
          {ArticleData.map((data, index) => (
            <ArticleCard
              key={index}
              date={data.date}
              content={data.content}
              title={data.title}
              readMore={closeModal}
              imgSrc={data.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
