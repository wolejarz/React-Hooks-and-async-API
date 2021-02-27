import {
  GET_CHANNELS,
  SELECT_CHANNEL,
  GET_VIDEOS,
  SELECT_VIDEO,
} from "./types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
      };
    case SELECT_CHANNEL:
      return {
        ...state,
      };
    case GET_VIDEOS:
      return {
        ...state,
      };
    case SELECT_VIDEO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default AppReducer;
