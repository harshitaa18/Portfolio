import dynamic from "next/dynamic";
import { usePortfolioContext } from "@/context/PortfolioContext";
import styles from "@/styles/Introduction.module.css";
import { IconSelector } from "./IconSelector";
import Image from "next/image";
import { useState, useEffect } from "react";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

export const Introduction: React.FC = () => {
  const { name, job, github, linkedin, leetcode, picture } = usePortfolioContext();

  // Animation for stats counters
  const [projectCount, setProjectCount] = useState(0);
  const [leetcodeCount, setLeetcodeCount] = useState(0);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setProjectCount(prev => prev < 10 ? prev + 1 : 10);
    }, 200);

    const leetcodeInterval = setInterval(() => {
      setLeetcodeCount(prev => prev < 250 ? prev + 10 : 250);
    }, 100);

    return () => {
      clearInterval(projectInterval);
      clearInterval(leetcodeInterval);
    };
  }, []);

  return (
    <div className={styles.introduction} id="introduction">
      {/* Animated shapes */}
      <div className={styles.animatedShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
        <div className={`${styles.shape} ${styles.shape5}`}></div>
        <div className={`${styles.shape} ${styles.shape6}`}></div>
      </div>

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
                  .changeDelay(80)
                  .typeString("Hello World!")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("I'm Harshita Sharma")
                  .pauseFor(700)
                  .deleteAll()
                  .typeString("Full Stack Developer")
                  .pauseFor(700)
                  .deleteAll()
                  .typeString("Problem Solver")
                  .pauseFor(700)
                  .deleteAll()
                  .typeString("Welcome to my Portfolio")
                  .start();
              }}
            />
          </h1>
          <h2 id="jobTitle">{job}</h2>

          {/* Added tagline */}
          <p className={styles.tagline}>
            Transforming ideas into elegant, efficient digital solutions
          </p>
        </div>

        {/* Achievement stats */}
        <div className={styles.achievementStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{projectCount}+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{leetcodeCount}+</span>
            <span className={styles.statLabel}>LeetCode Problems</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a href="#projects" className={styles.ctaButton}>
            View My Work
          </a>
        </div>

        <div className={styles.links}>
          <a href={github} aria-label="GitHub link" target="_blank" rel="noreferrer">
            <IconSelector skill="Github" />
          </a>
          <a href={leetcode} aria-label="LeetCode link" target="_blank" rel="noreferrer">
            <IconSelector skill="LeetCode" />
          </a>
          <a href={linkedin} aria-label="LinkedIn link" target="_blank" rel="noreferrer">
            <IconSelector skill="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};