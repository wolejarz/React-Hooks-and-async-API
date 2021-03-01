/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import AppContext from "../context/appContext";
import ChannelItem from "./channelItem";
import { Grid } from "@material-ui/core";

const ChannelList = () => {
  const appContext = useContext(AppContext);
  const { channels, handleGetChannels } = appContext;

  const listChannels = channels.map((current, id) => id);
  console.log(channels);
  console.log(listChannels);
  useEffect(() => {
    handleGetChannels();
  }, []);

  return <div>{listChannels}</div>;
};
export default ChannelList;
