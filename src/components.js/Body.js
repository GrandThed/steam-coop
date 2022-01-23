import React, { useContext, useEffect, useState } from "react";
import { getOwnedGamesService } from "../utils/services/steamServices";
import checkIfGameCoop from "../utils/funcions/checkIfGameCoop";
import { selectedGameContext } from "../context/selectedGameContext";
const Body = () => {
  const [ownGames, setOwnGames] = useState([]);
  useEffect(() => {
    getOwnedGamesService("76561198155425000").then(async ({ data }) => {

      const gamesWithCoops = await Promise.all(
        data.response.games.slice(0, 150).map(async (game) => {
          const [isGameCoop, gameInfo] = await checkIfGameCoop(game);
          return await (isGameCoop
            ? { ...gameInfo[game.appid]?.data, appid: game.appid }
            : null);
        })
      );

      setOwnGames(gamesWithCoops);
    });
  }, []);

  const { setSelectedGame } = useContext(selectedGameContext);

  return (
    <main className="flex flex-wrap justify-center">
      <section>
        {ownGames.map((game) => (
          <>
            {game && (
              <div
                key={game.appid}
                className="w-3/12"
                onClick={() => setSelectedGame(game)}
              >
                {console.log(game)}
                <img
                  className="mx-auto"
                  src={game.header_image}
                  alt={"game " + game.name}
                />
                <p>{game.appid}</p>
              </div>
            )}
          </>
        ))}
      </section>
    </main>
  );
};

export default Body;
