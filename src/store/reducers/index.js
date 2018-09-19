import { combineReducers } from "redux";

import trackList from "./trackList";

const rootReducer = combineReducers({
  tracks: trackList
});

export default rootReducer;
