import { getFriendListService, getUserInfoService } from "../services/steamServices";

const getFriendsData = async (steamid) => {
  const { data } = await getFriendListService(steamid);
  console.log(data);
  const friendsIdCSV =  data.friendslist.friends.map(friend => friend.steamid).join(",")
  return await getUserInfoService(friendsIdCSV)
};

export default getFriendsData;
