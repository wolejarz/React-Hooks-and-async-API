import React from 'react'
import AppStateProvider from './context/appStateProvider';
import ChannelList from './components/channelList';
import FetchBar from './components/fetchBar';
import VideoDetails from './components/videoDetails';
import VideoList from './components/videoList';

import "./styles/App.css";

const App = () => {
  return (
  <AppStateProvider>
<div>
  <ChannelList/>
</div>
<div>
  <FetchBar/>
</div>
<div>
  <VideoList/>
</div>
<div>
  <VideoDetails/>
</div>
  </AppStateProvider>;
  )}

export default App;
