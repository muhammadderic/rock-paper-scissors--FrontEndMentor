import { createContext, useContext, useState } from "react";

const Context = createContext();

export const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [rulesIsOpen, setRulesIsOpen] = useState(false);
  const [choice, setChoice] = useState(null);

  return (
    <Context.Provider
      value={{
        score,
        setScore,
        rulesIsOpen,
        setRulesIsOpen,
        choice,
        setChoice,
      }}>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => useContext(Context);