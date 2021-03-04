import React, { useContext } from "react";
import AppContext from "../context/appContext";

let VideoItem = ({ video, id }) => {
  const appContext = useContext(AppContext);
  const { handleSelectVideo, handleHideVideo } = appContext;
  // console.log(video);
  return (
    <div onClick={() => handleSelectVideo(video)}>
      <div>Title: {video.description}</div>
      <div>Time: {video.publishTime}</div>

      <button onClick={() => handleHideVideo(video)}>Hide Video</button>
    </div>
  );
};
export default VideoItem;
