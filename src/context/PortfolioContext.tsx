import { createContext, PropsWithChildren, useContext } from "react";
import portfolio from "@/data/portfolio.json";

type Portfolio = typeof portfolio;

export type IWork = typeof portfolio.projects[number];

const PortfolioContext = createContext<Portfolio | null>(null);

export const PortfolioProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <PortfolioContext.Provider value={portfolio}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolioContext was used outside of its Provider");
  }

  return context;
};
