/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/


// CHECKS IF VEHCILE IS IN THE FAVORITE LIST
export const checkVehicleIsFavorite = (vehicle, vehicleFavoriteList) => {
  if (!vehicle) return false
  const {
    id
  } = vehicle;
  const vehicleFavoriteListNotEmpty = vehicleFavoriteList.length > 0
  const favoritedVehicleFound = vehicleFavoriteList.find((({vin}) => vin === id))
  return vehicleFavoriteListNotEmpty && !!favoritedVehicleFound;
}
