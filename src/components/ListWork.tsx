import styles from "@/styles/WorkList.module.css";
import { usePortfolioContext } from "@/context/PortfolioContext";
import { Work } from "./Work";

export const ListWork: React.FC = () => {
  const { projects } = usePortfolioContext();
  return (
    <div id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.container}>
        {projects.map((project, idx) => (
          <Work key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};
