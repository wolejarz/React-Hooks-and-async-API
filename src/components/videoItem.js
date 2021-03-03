import React, { useContext } from "react";
import AppContext from "../context/appContext";

let VideoItem = ({ video, id }) => {
  const appContext = useContext(AppContext);
  const { handleSelectVideo, handleHideVideo } = appContext;
  // console.log(video);
  return (
    <div onClick={() => handleSelectVideo(video)}>
      <img
        style={{ marginRight: "5px", height: "5rem", width: "7rem" }}
        alt="thumbnail"
        src={video.thumbnails.medium.url}
      />
      <span>
        Title: {video.title} Time: {video.publishTime}
      </span>
      <button onClick={() => handleHideVideo(video)}>Hide Video</button>
    </div>
  );
};
export default VideoItem;
