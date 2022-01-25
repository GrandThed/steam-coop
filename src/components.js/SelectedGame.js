import React, { useContext } from "react";
import { selectedGameContext } from "../context/selectedGameContext";
import expernalLinkLogo from "../assets/expernal_link.png";
const SelectedGame = () => {
  const { selectedGame } = useContext(selectedGameContext);

  const coopIds = [1, 49, 36, 47, 37, 24, 27, 9, 38, 39];
  return (
    <div className="flex flex-row min-h-[250px] border mt-8 border-slate-300 shadow rounded-md w-full">
      {selectedGame && (
        <>
          <div
            style={{ backgroundImage: `url(${selectedGame.background})` }}
            className="min-h-[250px] h-full w-[200px] rounded-md bg-cover"
          ></div>
          <div className="w-full p-3">
            <div className="flex justify-between">
              <div className="flex flex-row items-center gap-3">
                <h2 className="text-3xl font-semibold">{selectedGame.name}</h2>
                <a
                  href={
                    `https://store.steampowered.com/app/` +
                    selectedGame.steam_appid
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={expernalLinkLogo}
                    alt="ir a pagina"
                    className="w-[25px] h-[25px]"
                  />
                </a>
              </div>
              {selectedGame.metacritic && <a
                href={selectedGame.metacritic?.url}
                className={
                  "text-2xl rounded-lg px-2 text-white " +
                  (selectedGame.metacritic?.score >= 80
                    ? "bg-green-500"
                    : "bg-yellow-400")
                }
                target="_blank"
                rel="noreferrer"
              >
                {selectedGame.metacritic?.score}
              </a>}
            </div>
            <div>
              <div className="chips flex flex-row gap-x-2 gap-y-2 max-w-lg flex-wrap m-0">
                {selectedGame.genres.map((cat) => (
                  <div
                    key={cat.id}
                    className="m-0 text-sm bg-slate-200 rounded-md px-1"
                  >
                    {cat.description}
                  </div>
                ))}
                {selectedGame.categories
                  .filter((cat) => -1 !== coopIds.indexOf(cat.id))
                  .map((cat) => (
                    <div
                      key={cat.id}
                      className="m-0 text-sm bg-slate-800 text-white rounded-md px-1"
                    >
                      {cat.description}
                    </div>
                  ))}
              </div>
              <p className="max-h-[150px] overflow-hidden text-left max-w-lg leading-4 mt-2">
                {selectedGame.short_description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedGame;
