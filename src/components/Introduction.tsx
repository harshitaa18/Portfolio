import dynamic from "next/dynamic";
import { usePortfolioContext } from "@/context/PortfolioContext";
import styles from "@/styles/Introduction.module.css";
import { IconSelector } from "./IconSelector";
import Image from "next/image";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export const Introduction: React.FC = () => {
  const { name, job, github, picture } = usePortfolioContext();
  return (
    <div className={styles.introduction} id="introduction">
      <div className={styles.container}>
        <Image
          src={require(`@/data/images${picture}`)}
          alt={`Photo de profil de ${name}`}
          width={150}
          height={150}
          className={styles.image}
        />
        <div className={styles.wrapperText}>
          <h1 className={styles.title}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("Bonjour !")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString(`Je m'appelle`)
                  .pauseFor(200)
                  .deleteAll()
                  .typeString(name)
                  .start();
              }}
            />
          </h1>
          <h2 id="jobTitle">{job}</h2>
        </div>
        <div className={styles.links}>
          <a
            href={github}
            aria-label="github link"
            target="_blank"
            rel="noreferrer"
          >
            <IconSelector skill="Github" />
          </a>
        </div>
      </div>
    </div>
  );
};
