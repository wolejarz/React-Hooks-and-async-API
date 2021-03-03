import React, { useContext } from "react";
import AppContext from "../context/appContext";

const SearchBar = () => {
  const appContext = useContext(AppContext);
  const { handleGetVideos } = appContext;
  return (
    <div>
      <button onClick={handleGetVideos}>Search Videos</button>
    </div>
  );
};
export default SearchBar;
