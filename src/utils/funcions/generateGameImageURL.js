const generateGameImageURL = (
  game = {
    appid: 300,
    has_community_visible_stats: true,
    img_icon_url: "062754bb5853b0534283ae27dc5d58200692b22d",
    img_logo_url: "e3a4313690bd551495a88e1c01951eb26cec7611",
    name: "Day of Defeat: Source",
    playtime_forever: 0,
    playtime_linux_forever: 0,
    playtime_mac_forever: 0,
    playtime_windows_forever: 0,
  }
) =>
  `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`;
export default generateGameImageURL;
