"use client";
import { useState } from "react";
import Header from "./components/sections/header/Header";
import Navbar from "./components/navigation-bar/Navbar";
import styles from "./page.module.scss";
import Testimonial from "./components/sections/testimonial/Testimonial";
import Services from "./components/sections/services/Services";
import Projects from "./components/sections/projects/Projects";

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
    </main>
  );
}
