import { useEffect } from 'react';
import './App.css';
import { getOwnedGamesService } from './utils/services/steamServices';

function App() {

  useEffect(() => {
    getOwnedGamesService("195159272")?.then(console.log)
  }, [])

  return (
    <div className="App flex justify-center h-screen items-center">
      <h1 className="text-3xl ">Test</h1>
    </div>
  );
}

export default App;
