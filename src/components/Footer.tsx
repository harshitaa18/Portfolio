import { usePortfolioContext } from "@/context/PortfolioContext";

export const Footer: React.FC = () => {
  const { title, github } = usePortfolioContext();

  return (
    <footer>
      <p>
        © {new Date().getFullYear()}{" "}
        <a href={github} target="_blank" rel="noreferrer">
          {title}
        </a>{" "}
        - Tous droits réservés.
      </p>
    </footer>
  );
};
