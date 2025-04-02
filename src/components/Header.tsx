import styles from "@/styles/Header.module.css";
import { usePortfolioContext } from "@/context/PortfolioContext";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header: React.FC = () => {
  const { title } = usePortfolioContext();
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <div className={styles.title} onClick={() => scroll.scrollToTop()}>
          {title}
        </div>
        <nav>
          <Link
            to="skills"
            href="#skills"
            spy
            smooth
            offset={-70}
            duration={500}
            className={styles.Link}
            activeClass={styles.active}
          >
            Skills
          </Link>
          <Link
            to="projects"
            href="#projects"
            spy
            smooth
            offset={-70}
            duration={500}
            className={styles.Link}
            activeClass={styles.active}
          >
            Projects
          </Link>
          <Link
            to="about"
            href="#about"
            spy
            smooth
            offset={-50}
            duration={500}
            className={styles.Link}
            activeClass={styles.active}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
