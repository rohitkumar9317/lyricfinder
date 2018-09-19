import { GET_TRACKS, SET_LOADING } from "../actionTypes";
import axios from "axios";

export const getTracks = () => dispatch => {
  dispatch(setLoading());
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    )
    .then(res =>
      dispatch({
        type: GET_TRACKS,
        payload: res.data.message.body.track_list
      })
    )
    .catch(err => console.log(err));
};

export const updateTracks = track_title => dispatch => {
  dispatch(setLoading());
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${track_title}&page_size=10&page=1&s_track_rating=desc&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    )
    .then(res =>
      dispatch({
        type: GET_TRACKS,
        payload: res.data.message.body.track_list,
        heading: "Search Results"
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => ({
  type: SET_LOADING
});
