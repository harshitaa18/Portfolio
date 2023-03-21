import styles from "@/styles/Skills.module.css";
import { usePortfolioContext } from "@/context/PortfolioContext";
import { IconSelector } from "./IconSelector";
import { Parallax } from "react-parallax";
import bgImage from "@/assets/img/fili-santillan.webp";

export const Skills: React.FC = () => {
  const { competences } = usePortfolioContext();

  return (
    <Parallax bgImage={bgImage.src} strength={500} className={styles.parallax}>
      <div id="skills" className={styles.Skills}>
        <h2>Mes Compétences</h2>
        <div className={styles.container}>
          {competences.map((skill, idx) => {
            return (
              <div key={idx} className={styles.skill}>
                <IconSelector skill={skill} />
                <p className={styles.title}>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Parallax>
  );
};
