import "./App.css";
import Body from "./components.js/Body";
import SelectedGame from "./components.js/SelectedGame";
import Title from "./components.js/Title";
import SelectedGameProvider from "./context/selectedGameContext";

function App() {
  return (
    <SelectedGameProvider>
      <div className="App flex align-middle m-auto flex-col max-w-7xl font-sans w-screen min-h-screen p-10 text-slate-900 ">
        <Title />
        <SelectedGame />
        {/* <Body /> */}
      </div>
    </SelectedGameProvider>
  );
}

export default App;
