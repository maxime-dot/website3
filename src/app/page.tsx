import dynamic from "next/dynamic";
import styles from "./page.module.scss";

const Navbar = dynamic(() => import("@/components/navigation-bar/Navbar"));
const Header = dynamic(() => import("@/components/sections/header/Header"));
const Testimonial = dynamic(
  () => import("@/components/sections/testimonial/Testimonial")
);

const Projects = dynamic(
  () => import("@/components/sections/projects/Projects")
);
const Teams = dynamic(() => import("@/components/sections/teams/Teams"));
const Articles = dynamic(
  () => import("@/components/sections/articles/Articles")
);
const Contacts = dynamic(
  () => import("@/components/sections/contacts/Contact")
);
const Footer = dynamic(() => import("@/components/footer/Footer"));

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Testimonial />
      <Projects />
      <Teams />
      <Articles />
      <Contacts />
      <Footer />
    </main>
  );
}
