import Header from "./components/sections/header/Header";
import Navbar from "./components/navigation-bar/Navbar";
import styles from "./page.module.scss";
import Testimonial from "./components/sections/testimonial/Testimonial";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Testimonial />
    </main>
  );
}
