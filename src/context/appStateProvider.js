import React, { useReducer } from "react";

import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { GET_CHANNELS, GET_VIDEOS } from "./types";

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
    dispatch({ type: GET_CHANNELS, payload: "aaa" });
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
