import React from "react";
import AppStateProvider from "./context/appStateProvider";
import ChannelList from "./components/channelList";
import SearchBar from "./components/searchBar";
import VideoDetails from "./components/videoDetails";
import VideoList from "./components/videoList";

import "./styles/App.css";

const App = () => {
  return (
    <AppStateProvider>
      <div>
        <div className="leftPan">
          <ChannelList />
          <SearchBar />
          <VideoList />
        </div>
        <div className="rightPan">
          <VideoDetails />
        </div>
      </div>
    </AppStateProvider>
  );
};

export default App;
