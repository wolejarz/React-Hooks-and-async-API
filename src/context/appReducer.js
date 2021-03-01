import {
  GET_CHANNELS,
  SELECT_CHANNEL,
  GET_VIDEOS,
  SELECT_VIDEO,
  HIDE_VIDEO,
} from "./types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_CHANNELS: {
      return {
        ...state,
        channels: action.payload,
      };
    }
    //toggles selection of N-th (action.payload) channel
    case SELECT_CHANNEL: {
      const channelWithNewState = {
        ...state.channels[action.payload],
        selected: !state.channels[action.payload].selected,
      };
      return {
        ...state,
        channels: state.channels.map((channel, id) =>
          id === action.payload ? channelWithNewState : channel
        ),
      };
    }
    case GET_VIDEOS:
      return {
        ...state,
      };

    case SELECT_VIDEO:
      return {
        ...state,
      };
    case HIDE_VIDEO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default AppReducer;
