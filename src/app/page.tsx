"use client";
import { useState } from "react";
import Header from "./components/sections/header/Header";
import Navbar from "./components/navigation-bar/Navbar";
import styles from "./page.module.scss";
import Testimonial from "./components/sections/testimonial/Testimonial";
import Services from "./components/sections/services/Services";
import Projects from "./components/sections/projects/Projects";
import Teams from "./components/sections/teams/Teams";
import Articles from "./components/sections/articles/Articles";
import Contacts from "./components/sections/contacts/Contact";

export default function Home() {
  const [overflowHidden, setOverflowHidden] = useState(false);

  return (
    <main
      className={styles.main}
      style={{ overflow: overflowHidden ? "hidden" : "auto" }}
    >
      <Navbar />
      <Header />
      <Testimonial onOpenSlider={() => setOverflowHidden(!overflowHidden)} />
      <Services />
      <Projects />
      <Teams />
      <Articles />
      <Contacts />
    </main>
  );
}
