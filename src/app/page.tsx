import Header from "./components/header/Header";
import Navbar from "./components/navigation-bar/Navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
    </main>
  );
}
