import {
  GET_CHANNELS,
  SELECT_CHANNEL,
  GET_VIDEOS,
  SELECT_VIDEO,
  HIDE_VIDEO,
  APIKey,
} from "./types";
const channels_ids = [
  "UCVTyTA7-g9nopHeHbeuvpRA",
  "UCwWhs_6x42TyRM4Wstoq8HA",
  "UCMtFAi84ehTSYSE9XoHefig",
];

async function getChannelDetailsfromAPI(id) {
  const API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&maxResults=1&key=${APIKey}`;
  const response = await fetch(API);
  const data = await response.json();
  const channelData = {
    tittle: data.items[0].snippet.title,
    url: data.items[0].snippet.thumbnails.default.url,
  };
  console.log(channelData);
  return channelData;
}
const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_CHANNELS: {
      const channels = [];
      channels_ids.forEach((id) => {
        getChannelDetailsfromAPI(id).then((channel) => channels.push(channel));
      });
      return {
        ...state,
        channels,
      };
    }
    case SELECT_CHANNEL:
      return {
        ...state,
      };
    case GET_VIDEOS:
      return {
        ...state,
      };
    case SELECT_VIDEO:
      return {
        ...state,
      };
    case HIDE_VIDEO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default AppReducer;
