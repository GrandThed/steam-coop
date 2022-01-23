import React, { useContext } from "react";
import { selectedGameContext } from "../context/selectedGameContext";
import expernalLinkLogo from '../assets/expernal_link.png';
;

const SelectedGame = () => {
  const { selectedGame } = useContext(selectedGameContext);
  const game = {
    name: "LISA: The Painful",
    steam_appid: 335670,
    is_free: false,
    about_the_game:
      '<img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/tit.png?t=1573228448" /><br><strong>A game about survival, sacrifice, and perverts... </strong><br><br>Lisa is a quirky side-scrolling RPG set in a post-apocalyptic wasteland. Beneath the charming and funny exterior is a world full of disgust and moral destruction. Players will learn what kind of person they are by being FORCED to make choices. These choices permanently effect the game play. If you want to save a party member from death, you will have to sacrifice the strength of your character. Whether it\'s taking a beating for them, or chopping off limbs, or some other inhuman way. You will learn that in this world being selfish and heartless is the only way to survive... <br><br>FEATURES: <br>- Visible character sacrifices that effect your stats (removing arms, eyes, scratches)<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/limb_lose.png?t=1573228448" /><br>- Recruiting 30+ new party members in towns and camps.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/cast.png?t=1573228448" /><br>- Ruthless choices that permanently effect towns, characters, life...<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/dead.png?t=1573228448" /><br>- White knuckle shopping cart races.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/shopping.png?t=1573228448" /><br>- Expending party members in Russian Roulette for huge profit, but perma-death if they lose.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/russian.png?t=1573228448" /><br>- Countless hidden secrets in the world for you to explore. <br><img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/weird.png?t=1573228448" /><br>- A life ruining gaming experience.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/335670/extras/brad_sad.png?t=1573228448" />',
    header_image:
      "https://cdn.akamai.steamstatic.com/steam/apps/335670/header.jpg?t=1573228448",
    developers: ["Dingaling"],
    publishers: ["Dingaling Productions, LLC"],
    platforms: {
      windows: true,
      mac: true,
      linux: true,
    },
    metacritic: {
      score: 77,
      url: "https://www.metacritic.com/game/pc/lisa?ftag=MCD-06-10aaa1f",
    },
    categories: [
      {
        id: 2,
        description: "Un jugador",
      },
      {
        id: 22,
        description: "Logros de Steam",
      },
      {
        id: 29,
        description: "Cromos de Steam",
      },
      {
        id: 18,
        description: "Compat. parcial con mando",
      },
      {
        id: 23,
        description: "Steam Cloud",
      },
    ],
    genres: [
      {
        id: "25",
        description: "Aventura",
      },
      {
        id: "23",
        description: "Indie",
      },
      {
        id: "3",
        description: "Rol",
      },
    ],
    release_date: {
      coming_soon: false,
      date: "15 DIC 2014",
    },
    background:
      "https://cdn.akamai.steamstatic.com/steam/apps/335670/page_bg_generated_v6b.jpg?t=1573228448",
  };
  return (
    <div className="flex flex-row min-h-[250px] border mt-8 border-slate-300 shadow rounded-md w-full">
      <div
        style={{ backgroundImage: `url(${game.background})` }}
        className="min-h-[250px] h-full w-[200px] rounded-md bg-cover"
      >
      </div>
      <div className="w-full p-3">
        <div className="flex justify-between">
            <div className="flex flex-row items-center gap-3">
                <h2 className="text-3xl font-semibold">{game.name}</h2>
                <img src={expernalLinkLogo} alt="ir a pagina" className="w-[25px] h-[25px]"/>
            </div>
            <a href={game.metacritic.url} className="text-2xl rounded bg-slate-300 px-2">{game.metacritic.score}</a>
        </div>
      </div>
    </div>
  );
};

export default SelectedGame;
