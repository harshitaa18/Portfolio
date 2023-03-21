import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaSass,
  FaDocker,
  FaAngular,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiMui,
} from "react-icons/si";

type Props = { skill: string };

export const IconSelector: React.FC<Props> = ({ skill }) => {
  switch (skill) {
    case "HTML":
      return <FaHtml5 />;
    case "CSS":
      return <FaCss3Alt />;
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
    case "Sass":
      return <FaSass />;
    case "Docker":
      return <FaDocker />;
    case "Redux":
      return <SiRedux />;
    case "Angular":
      return <FaAngular />;
    case "Material UI":
      return <SiMui />;
    case "Github":
      return <FaGithub />;
    case "Link":
      return <FaLink />;
    default:
      return <p>{skill}</p>;
  }
};
