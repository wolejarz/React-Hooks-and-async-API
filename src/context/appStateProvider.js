import React, { useReducer } from "react";

import AppContext from "./appConext";
import AppReducer from "./appReducer";

const AppStateProvider = (props) => {
  const initialState = {
    channels: [],
    videos: [],
    selectedVideo: "",
    hiddenOrWatchedVideos: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        channels: state.channels,
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        hiddenOrWatchedVideo: this.state.hiddenOrWatchedVideos,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppStateProvider;
