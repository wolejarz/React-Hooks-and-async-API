import React, { useReducer } from "react";

import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
  GET_CHANNELS,
  GET_VIDEOS,
  APIKey,
  SELECT_CHANNEL,
  CLEAR_VIDEOS,
  HIDE_VIDEO,
} from "./types";

const AppStateProvider = (props) => {
  const initialState = {
    channels: [],
    videos: [],
    selectedVideo: null,
    hiddenOrWatchedVideos: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Select/Unselect channel from list
  const handleSelectChannel = (id) => {
    dispatch({ type: SELECT_CHANNEL, payload: id });
  };
  //Load hardcoded channels descriptions from Youtube API - waits until all parallel async requests are completed
  const handleGetChannels = async function () {
    const channels_ids = [
      //"UCVTyTA7-g9nopHeHbeuvpRA",
      //"UCwWhs_6x42TyRM4Wstoq8HA",
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
      resultChannels.push({
        channelId: channel.items[0].id,
        selected: true,
        ...channel.items[0].snippet,
      })
    );
    dispatch({ type: GET_CHANNELS, payload: resultChannels });
  };
  //Loads and sorts videos from selected channels - each selected channel async in parallel
  const handleGetVideos = function () {
    const allChannelsUnselected = !state.channels.reduce(
      (total, current) => total || current.selected,
      false
    );
    dispatch({ type: CLEAR_VIDEOS });
    state.channels.forEach((current) => {
      if (current.selected || allChannelsUnselected) {
        fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${current.channelId}&maxResults=3&type=video&key=${APIKey}`
        )
          .then((response) => response.json())
          .then((data) =>
            dispatch({
              type: GET_VIDEOS,
              payload: data.items.map((current) => ({
                id: current.id.videoId,
                ...current.snippet,
              })),
            })
          );
      }
    });
  };

  //Slect and show video
  const handleSelectVideo = () => {};

  //Hide video
  const handleHideVideo = (video) => {
    console.log(video);
    dispatch({ type: HIDE_VIDEO, payload: video });
  };

  return (
    <AppContext.Provider
      value={{
        channels: state.channels,
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        hiddenOrWatchedVideo: state.hiddenOrWatchedVideos,
        handleSelectChannel,
        handleGetVideos,
        handleSelectVideo,
        handleHideVideo,
        handleGetChannels,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppStateProvider;
