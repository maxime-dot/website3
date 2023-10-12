import Navbar from "./components/navigation-bar/Navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}
