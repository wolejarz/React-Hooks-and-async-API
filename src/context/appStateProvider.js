import React, { useReducer } from "react";

import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { GET_CHANNELS, GET_VIDEOS, APIKey } from "./types";

const AppStateProvider = (props) => {
  const initialState = {
    channels: [],
    videos: [],
    selectedVideo: "",
    hiddenOrWatchedVideos: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Select/Unselect channel from list
  const handleSelectChannel = (id) => {};

  //Load channels from  source
  const handleGetChannels = () => {
    const channels_ids = [
      "UCVTyTA7-g9nopHeHbeuvpRA",
      "UCwWhs_6x42TyRM4Wstoq8HA",
      "UCMtFAi84ehTSYSE9XoHefig",
    ];
    const requests = channels_ids.map((id) =>
      fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&maxResults=1&key=${APIKey}`
      )
    );
    const channels = [];

    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((allChannelsData) =>
        allChannelsData.forEach((channel) =>
          channels.push(channel.items[0].snippet)
        )
      )
      .then(dispatch({ type: GET_CHANNELS, payload: channels }));
  };

  return (
    <AppContext.Provider
      value={{
        channels: state.channels,
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        hiddenOrWatchedVideo: state.hiddenOrWatchedVideos,
        handleSelectChannel,
        handleGetChannels,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppStateProvider;
