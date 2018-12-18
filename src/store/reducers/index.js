import { combineReducers } from "redux";
import vehicle from './vehicle'
import vehicles from './vehicles'
import favoriteVehicles from './favoriteVehicles'


export default combineReducers({
  vehicle,
  vehicles,
  favoriteVehicles,
});
