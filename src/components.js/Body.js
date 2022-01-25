import React, { useContext, useEffect, useState } from "react";
import getFriendsData from "../utils/funcions/getFriendsData";
import {
  getOwnedGamesService,
  getUserInfoService,
} from "../utils/services/steamServices";
import checkIfGameCoop from "../utils/funcions/checkIfGameCoop";
import { selectedGameContext } from "../context/selectedGameContext";
const Body = () => {
  const [ownGames, setOwnGames] = useState([]);

  const [currentUser, setCurrentUser] = useState(null);

  const { setSelectedGame } = useContext(selectedGameContext);

  const [friedList, setFriedList] = useState([]);

  const handleSteamInput = ({ target }) => {
    const regex = /(https:\/\/steamcommunity.com\/profiles\/)(\d*)/;
    const processId = target.value.match(regex)
      ? target.value.match(regex)[2]
      : null;

    if (/76\d{15}/.test(processId || target.value)) {
      getUserInfoService(processId || target.value).then(({ data }) => {
        setCurrentUser(data.response.players[0]);
        getOwnedGamesService(data.response.players[0].steamid).then(async ({ data }) => {
          const gamesWithCoops = await Promise.all(
            data.response.games.slice(0,130).map(async (game) => {
              const [isGameCoop, gameInfo] = await checkIfGameCoop(game);
              return await (isGameCoop
                ? { ...gameInfo[game.appid]?.data, appid: game.appid }
                : null);
            })
          );
          setOwnGames(gamesWithCoops);
        });
        getFriendsData(data.response.players[0].steamid).then(({ data }) => {
          setFriedList(data.response.players);
        });
      });
    }
  };
  return (
    <main className="">
      <section className="flex gap-x-5 flex-row mt-8">
        <div className="w-3/12 flex flex-col">
          <input
            type="text"
            className="w-full border  border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:border-slate-400"
            placeholder="steam id..."
            onChange={handleSteamInput}
          />

          {currentUser && (
            <div className="py-1 pt-2 flex flex-row items-center">
              <img src={currentUser.avatar} className="" alt="steam avatar" />
              <p className="p-0 pl-3 m-0">{currentUser.personaname}</p>
            </div>
          )}

          <div className="overflow-scroll max-h-[51vh] flex flex-col overflow-x-hidden mt-1 border flex-grow  border-slate-300 shadow rounded-md">
            <h3 className="px-2 w-full text-left text-slate-800 text-lg font-semibold">
              Friend List
            </h3>
            {friedList.map((user) => (
              <div className="py-1 pt-2 flex flex-row items-center">
                <img src={user.avatar} className="" alt="steam avatar" />
                <p className="p-0 pl-3 m-0">{user.personaname}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-h-[250px] max-h-[60vh] overflow-scroll w-9/12 border flex flex-row flex-wrap  border-slate-300 shadow rounded-md">
          {ownGames.map(
            (game) =>
              game && (
                <div
                  key={game.appid}
                  className="w-3/12"
                  onClick={() => setSelectedGame(game)}
                >
                  <img
                    className="mx-auto  rounded-md p-1"
                    src={game.header_image}
                    alt={"game " + game.name}
                  />
                </div>
              )
          )}
        </div>
      </section>
    </main>
  );
};

export default Body;
