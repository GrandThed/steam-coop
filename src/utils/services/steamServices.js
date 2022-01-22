import axios from "axios";
import {
  GET_FRIEND_LIST_URL,
  GET_OWN_GAMES_URL,
  GET_USER_INFO_FROM_ID_URL,
  GET_GAME_INFO
} from "../const/steamApi";

const steamAxiosInstance = axios.create();

steamAxiosInstance.defaults.params = {};
steamAxiosInstance.defaults.params["key"] = process.env.REACT_APP_STEAM_KEY;

export const getOwnedGamesService = (steamid = "") => {
  const axiosRequestConfig = {
    // key string: Clave de autenticación de usuario de la Web API de Steamworks.
    // steamid	uint64:	El jugador al que estamos preguntando.
    // include_appinfo	bool:	True si queremos información adicional (nombre, icono) acerca de cada juego.
    // include_played_free_games bool:	Los juegos gratuitos se excluyen por defecto. Si se activa, se devolverán también los juegos gratuitos a los que haya jugado el usuario.
    // appids_filter	uint32:	Si se activa, restringe el resultado establecido al pasado en las aplicacion
    params: {
      steamid,
      include_appinfo: true,
      include_played_free_games: true,
      format: "json",
    },
    method: "GET",
    url: GET_OWN_GAMES_URL,
    mode: "cors",
  };

  return steamAxiosInstance(axiosRequestConfig);
};

export const getUserInfoService = (steamids = "") => {
  const axiosRequestConfig = {
    params: {
      steamids,
    },
    method: "GET",
    url: GET_USER_INFO_FROM_ID_URL,
    mode: "cors",
  };

  return steamAxiosInstance(axiosRequestConfig);
};

export const getFriendList = (steamid = "") => {
  const axiosRequestConfig = {
    params: {
      steamid,
      relationship: "friend",
    },
    method: "GET",
    url: GET_FRIEND_LIST_URL,
    mode: "cors",
  };

  return steamAxiosInstance(axiosRequestConfig);
};

export const getGameDetailsService = (appids = "") => {
  const axiosRequestConfig = {
    params: {
      appids,
      key: ""
    },
    method: "GET",
    url: GET_GAME_INFO,
    mode: "cors",
  };

  return steamAxiosInstance(axiosRequestConfig);
};

