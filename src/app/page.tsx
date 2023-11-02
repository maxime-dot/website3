"use client";
import Header from "./components/sections/header/Header";
import Navbar from "./components/navigation-bar/Navbar";
import styles from "./page.module.scss";
import Testimonial from "./components/sections/testimonial/Testimonial";
import Services from "./components/sections/services/Services";
import Projects from "./components/sections/projects/Projects";
import Teams from "./components/sections/teams/Teams";
import Articles from "./components/sections/articles/Articles";
import Contacts from "./components/sections/contacts/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Testimonial />
      <Services />
      <Projects />
      <Teams />
      <Articles />
      <Contacts />
      <Footer />
    </main>
  );
}
