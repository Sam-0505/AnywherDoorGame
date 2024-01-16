import { combineReducers } from "redux";
import characterReducer from "../slices/characterSlice";
import mapImagesReducer from "../slices/mapImagesSlice";
import statusReducer from "../slices/statusSlice";

export default combineReducers({
  mapImagesLoaded: mapImagesReducer,
  gameStatus: statusReducer,
  character: characterReducer,
});
