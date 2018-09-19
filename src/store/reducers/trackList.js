import { GET_TRACKS, SET_LOADING } from "../actionTypes";

const initialState = {
  trackList: [],
  loading: false,
  heading: "Top 10 Tracks"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        trackList: [...action.payload],
        loading: false,
        heading: action.heading
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
