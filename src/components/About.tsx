import { usePortfolioContext } from "@/context/PortfolioContext";
import styles from "@/styles/About.module.css";
import { Parallax } from "react-parallax";
import bgImage from "@/assets/img/yu-kato.webp";

export const About = () => {
  const { abouts } = usePortfolioContext();
  return (
    <Parallax bgImage={bgImage.src} strength={500} className={styles.parallax}>
      <div id="about" className={styles.About}>
        <h2>About Me</h2>
        <section className={styles.container}>
          {abouts.map((about, idx) => (
            <p key={idx}>{about}</p>
          ))}
        </section>
      </div>
    </Parallax>
  );
};
