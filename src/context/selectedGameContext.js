import { createContext, useState } from "react";

export const selectedGameContext = createContext(null);

const SelectedGameProvider = ({ children }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  
  return (
    <selectedGameContext.Provider value={{selectedGame, setSelectedGame }}>
      {children}
    </selectedGameContext.Provider>
  );
};

export default SelectedGameProvider;
