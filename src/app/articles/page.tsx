"use client";
import Link from "next/link";
import "./articles-page.scss";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LoadingModal from "@/components/modal-lets-talk/LoadingModal";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/button/normal/Button";
import ArticleData from "@/data/articles.json";
import ArticleCard from "@/components/cards/articles/ArticleCard";
import { truncate } from "@/helpers/truncate";
import Footer from "@/components/footer/Footer";
import ArticleViewer from "@/components/article-viewer/ArticleViewer";
const ModalLetsTalk = dynamic(
  () => import("@/components/modal-lets-talk/ModalLetsTalk"),

  {
    loading: () => <LoadingModal />,
  },
);
export default function Page() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(ArticleData[0]);
  const [openViewer, setOpenViewer] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  const openModal = () => {
    setOpenModal(true);
  };

  const handleOpenViewer = (data: any) => {
    setSelectedCard(data);
    setOpenViewer(true);
  };

  const handleViewerClose = () => {
    setOpenViewer(false);
  };
  useEffect(() => {
    if (openViewer) {
      document.documentElement.classList.add("global-style");
      document.body.classList.add("global-style");
    } else {
      document.documentElement.classList.remove("global-style");
      document.body.classList.remove("global-style");
    }
  }, [openViewer]);

  return (
    <>
      {openViewer && (
        <ArticleViewer data={selectedCard} onClose={handleViewerClose} />
      )}
      <div className="akata-articles-page container">
        {isOpenModal && <ModalLetsTalk onClose={closeModal} />}
        <Link
          href={"/#articles"}
          className="return-link"
          as="/#articles"
          title="Go back to home page"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="link-icon" />
          Go back
        </Link>
        <header className="akata-article-header w-100">
          <div className="header-title d-flex flex-col">
            <div className="title-text d-flex flex-col">
              <h1 className="akata-title-strong">
                WHAT’s <span>New</span> !
              </h1>
              <p className="content akata-text-big">
                Explore the latest news and updates in our dedicated section,
                stay informed about the significant events of our company and
                the industry.
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
            {ArticleData.slice(0, 2).map((data, index) => (
              <div
                className="horizontal-article d-flex "
                key={`horizontal-article-${index}`}
                onClick={() => handleOpenViewer(data)}
              >
                <button className="read-more btn">
                  <FontAwesomeIcon icon={faChevronRight} className="btn-icon" />
                </button>
                <Image
                  className="article-poster"
                  alt="article poster"
                  src={data.imageSrc}
                  width={220}
                  height={166}
                />
                <div className="article-text-content d-flex flex-col">
                  <span className="date">{data.date}</span>
                  <h3 className="title">{data.title}</h3>
                  <p className="content akata-text-small">
                    {truncate(data.smallContent, 127)}
                  </p>
                </div>
              </div>
            ))}
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
                imgSrc={data.imageSrc}
                readMore={() => handleOpenViewer(data)}
                smallContent={data.smallContent}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
