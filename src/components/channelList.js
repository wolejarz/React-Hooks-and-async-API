/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import AppContext from "../context/appContext";
import ChannelItem from "./channelItem";
import { Grid } from "@material-ui/core";

const ChannelList = () => {
  const appContext = useContext(AppContext);
  const { channels } = appContext;
  const listChannels = channels.map((current, id) => (
    <ChannelItem key={id} channel={current} id={id} />
  ));

  return <div>{listChannels} </div>;
};
export default ChannelList;
