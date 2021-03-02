import React, { useContext } from "react";
import { Grid, Paper, Typography, Checkbox } from "@material-ui/core";
import AppContext from "../context/appContext";

let ChannelItem = ({ channel, id }) => {
  const appContext = useContext(AppContext);
  const { handleSelectChannel, handleGetVideos } = appContext;

  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <img
          style={{ marginRight: "5px", height: "5rem", width: "7rem" }}
          alt="thumbnail"
          src={channel.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">{channel.title}</Typography>
        <Checkbox
          checked={channel.selected}
          // onChange={() => handleSelectChannel(id)}
          onChange={() => {
            handleSelectChannel(id);
            handleGetVideos();
          }}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Paper>
    </Grid>
  );
};
export default ChannelItem;
