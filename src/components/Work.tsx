import styles from "@/styles/Work.module.css";
import Image from "next/image";
import { IWork } from "@/context/PortfolioContext";
import { IconSelector } from "./IconSelector";

type Props = IWork;

export const Work: React.FC<Props> = ({
  name,
  description,
  technologies,
  image,
  link,
  repository,
}) => {
  return (
    <div className={styles.work}>
      <Image
        src={require(`@/data/images/projects${image}`)}
        width={1080}
        height={900}
        alt={`screenshot du site ${name}`}
        className={styles.image}
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.technologies}>
            {technologies.map((technology, idx, array) => {
              technology = technology.toUpperCase();
              return (
                <span className={styles.technology} key={idx}>
                  {array.length != idx + 1 ? `${technology}, ` : technology}
                </span>
              );
            })}
          </p>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.links}>
          <a
            href={repository}
            aria-label="github link"
            target="_blank"
            rel="noreferrer"
          >
            <IconSelector skill="Github" />
          </a>
          {link && (
            <a
              href={link}
              aria-label="project link"
              target="_blank"
              rel="noreferrer"
            >
              <IconSelector skill="Link" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
