import React, { useContext } from "react";
//import { Grid, Paper, Typography } from "@material-ui/core";
import AppContext from "../context/appContext";

const ChannelItem = ({ id, channel }) => {
  const appContext = useContext(AppContext);
  const { handleSelectChannel } = appContext;

  //console.log(channel);
  //console.log(channels);
  return <div>Nazwa {id} </div>;
};

export default ChannelItem;
