import React, { useReducer } from "react";

import AppContext from "./appConext";
import AppReducer from "./appReducer";

const AppStateProvider = (props) => {
  const initialState = {
    channels: [],
    videos: [],
    selectedVideo: "",
    hiddenOrWatchVideos: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return <AppContext.Provider>{props.children}</AppContext.Provider>;
};
export default AppStateProvider;
