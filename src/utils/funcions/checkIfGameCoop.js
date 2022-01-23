import { getGameDetailsService } from "../services/steamServices";
// ids for every kind of coop and multiplayer game
const coopIds = [1, 49, 36, 47, 37, 24, 27, 9, 38, 39];

const sleepF = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const checkIfGameCoop = async (game) => {
  const { data } = await getGameDetailsService(game.appid);
  const isCoop = data[game.appid].data?.categories?.some(
    ({ id }) => -1 !== coopIds.indexOf(id)
  );
  await sleepF(200)
  return [isCoop, data];
};

export default checkIfGameCoop;
