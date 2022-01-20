import axios from "axios";
import { GET_OWN_GAMES_URL } from "../const/steamApi";

const steamAxiosInstance = axios.create();

export const getOwnedGamesService = (steamId) => {
  const axiosRequestConfig = {
    // key string: Clave de autenticación de usuario de la Web API de Steamworks.
    // steamid	uint64:	El jugador al que estamos preguntando.
    // include_appinfo	bool:	True si queremos información adicional (nombre, icono) acerca de cada juego.
    // include_played_free_games bool:	Los juegos gratuitos se excluyen por defecto. Si se activa, se devolverán también los juegos gratuitos a los que haya jugado el usuario.
    // appids_filter	uint32:	Si se activa, restringe el resultado establecido al pasado en las aplicacion
    params: {
      key: process.env.REACT_APP_STEAM_KEY,
      steamId,
      include_appinfo: true,
      include_played_free_games: true,
    },
    method: "GET",
    headers: {
      ContentType: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    url: GET_OWN_GAMES_URL,
    mode: "cors",
  };

  return steamAxiosInstance(axiosRequestConfig);
};
