import React, { useContext } from "react";
import AppContext from "../context/appContext";

const ChannelItem = ({ channel, id }) => {
  const appContext = useContext(AppContext);
  const { handleSelectChannel } = appContext;

  return (
    <div>
      <img
        style={{ marginRight: "5px", height: "4rem" }}
        alt="thumbnail"
        src={channel.thumbnails.medium.url}
      />
      <span>{channel.title}</span>
      <input
        type="checkbox"
        onChange={() => handleSelectChannel(id)}
        checked={channel.selected}
      />
    </div>
  );
};
export default ChannelItem;
