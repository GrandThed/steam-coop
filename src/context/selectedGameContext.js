import { createContext, useState } from "react";

export const selectedGameContext = createContext(null);

const SelectedGameProvider = ({ children }) => {
  const [selectedGame, setselectedGame] = useState(null);
  return (
    <selectedGameContext.Provider value={{ selectedGame, setselectedGame }}>
      {children}
    </selectedGameContext.Provider>
  );
};

export default SelectedGameProvider;
