/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/


export const checkVehicleIsFavorite = (vehicle, vehicleFavoriteList) => {
  const {
    id
  } = vehicle;
  const vehicleFavoriteListNotEmpty = vehicleFavoriteList.length > 0
  const favoritedVehicleFound = vehicleFavoriteList.find((({vin}) => vin === id))
  return vehicleFavoriteListNotEmpty && !!favoritedVehicleFound;
}
