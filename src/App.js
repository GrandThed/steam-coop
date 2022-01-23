import "./App.css";
import Body from "./components.js/Body";
import Title from "./components.js/Title";
// import {
//   getFriendList,
//   getOwnedGamesService,
//   getUserInfoService,
// } from "./utils/services/steamServices";

function App() {
  return (
    <div className="App font-sans w-screen min-h-screen p-10 text-slate-900 ">
      <Title />
      <Body />
    </div>
  );
}

export default App;
