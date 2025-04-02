import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaGithub,
  FaLinkedin,
  FaLink
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiMui,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiLeetcode
} from "react-icons/si";

type Props = { skill: string };

export const IconSelector: React.FC<Props> = ({ skill }) => {
  switch (skill) {
    case "HTML":
      return <FaHtml5 />;
    case "CSS":
      return <FaCss3Alt />;
    case "MongoDB":
      return <SiMongodb />;
    case "Prisma":
      return <SiPrisma />;
    case "React":
      return <FaReact />;
    case "Typescript":
      return <SiTypescript />;
    case "Javascript":
      return <SiJavascript />;
    case "Node.js":
      return <FaNodeJs />;
    case "Express.js":
      return <SiExpress />;
    case "Next.js":
      return <SiNextdotjs />;
    case "PostgreSQL":
      return <SiPostgresql/>;
    case "Redux":
      return <SiRedux />;
    case "Angular":
      return <FaAngular />;
    case "Shadcn UI":
      return <SiMui />;
    case "Github":
      return <FaGithub />;
    case "LinkedIn":
      return <FaLinkedin />;
    case "LeetCode":
      return <SiLeetcode />;
    case "Link":
      return <FaLink />;
    default:
      return <p>{skill}</p>;
  }
};
