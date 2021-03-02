import React, { useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import AppContext from "../context/appContext";

let VideoItem = ({ video, id }) => {
  const appContext = useContext(AppContext);
  const { handleSelectVideo, handleHideVideo } = appContext;
  console.log(video);
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <img
          style={{ marginRight: "5px", height: "5rem", width: "7rem" }}
          alt="thumbnail"
          src={video.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">Title: {video.title}</Typography>
      </Paper>
    </Grid>
  );
};
export default VideoItem;
