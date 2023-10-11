import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        width={1052.75 / 1.4}
        height={735.52 / 1.4}
        src={"/Maskoty.png"}
        alt="akata-maki-representation"
        className="maki"
      />
      <p>See you soon....</p>
    </main>
  );
}
