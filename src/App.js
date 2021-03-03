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
        <ChannelList />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <VideoList />
      </div>
      <div>
        <VideoDetails />
      </div>
    </AppStateProvider>
  );
};

export default App;
