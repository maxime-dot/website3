"use client";
import { useState } from "react";
import Header from "./components/sections/header/Header";
import Navbar from "./components/navigation-bar/Navbar";
import styles from "./page.module.scss";
import Testimonial from "./components/sections/testimonial/Testimonial";

export default function Home() {
  const [overflowHidden, setOverflowHidden] = useState(false);

  // Function to update the overflow state

  return (
    <main
      className={styles.main}
      style={{ overflow: overflowHidden ? "hidden" : "auto" }}
    >
      <Navbar />
      <Header />
      <Testimonial onOpenSlider={() => setOverflowHidden(!overflowHidden)} />
    </main>
  );
}
