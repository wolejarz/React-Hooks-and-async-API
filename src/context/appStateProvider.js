import React, { useEffect, useReducer } from "react";

import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { GET_CHANNELS, GET_VIDEOS, APIKey, SELECT_CHANNEL } from "./types";

const AppStateProvider = (props) => {
  const initialState = {
    channels: [],
    videos: [],
    selectedVideo: "",
    hiddenOrWatchedVideos: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Select/Unselect channel from list
  const handleSelectChannel = (id) => {
    dispatch({ type: SELECT_CHANNEL, payload: id });
  };
  //Load channels from  source
  const handleGetChannels = async function () {
    const channels_ids = [
      //   "UCVTyTA7-g9nopHeHbeuvpRA",
      //   "UCwWhs_6x42TyRM4Wstoq8HA",
      "UCMtFAi84ehTSYSE9XoHefig",
    ];
    const requests = channels_ids.map((id) =>
      fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&maxResults=1&key=${APIKey}`
      )
    );
    const resultChannels = [];
    const responses = await Promise.all(requests);
    const responsesInJSON = await Promise.all(responses.map((r) => r.json()));
    responsesInJSON.forEach((channel) =>
      resultChannels.push({ selected: true, ...channel.items[0].snippet })
    );
    dispatch({ type: GET_CHANNELS, payload: resultChannels });
  };
  //Loads and sorts videos from selected channels
  const handleGetVideos = async function () {};
  // loading list of channels when application loads
  useEffect(() => {
    handleGetChannels();
  }, []);
  return (
    <AppContext.Provider
      value={{
        channels: state.channels,
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        hiddenOrWatchedVideo: state.hiddenOrWatchedVideos,
        handleSelectChannel,
        handleGetVideos,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppStateProvider;
