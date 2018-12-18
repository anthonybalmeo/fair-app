import axios from 'axios'

// ACTION TYPES
export const SAVE_VEHICLES = 'SAVE_VEHICLES';
export const SAVE_VEHICLE = 'SAVE_VEHICLE';
export const SAVE_FAVORITE_VEHICLES = 'SAVE_FAVORITE_VEHICLES';
export const REMOVE_FAVORITE_VEHICLES = 'REMOVE_FAVORITE_VEHICLES';
export const FETCH_VEHICLE_BY_PAGE = 'FETCH_VEHICLE_BY_PAGE'
const apiUrl = 'https://private-4e19e-interviewapi3.apiary-mock.com/vehicles'

// ACTIONS
export const saveVehicles = vehicles => ({
  type: SAVE_VEHICLES,
  payload: {
    vehicles,
  }
});

export const saveFavoriteVehicles = vin => ({
  type: SAVE_FAVORITE_VEHICLES,
  payload: {
    vin,
  }
});

export const removeFavoriteVehicles = vin => ({
  type: REMOVE_FAVORITE_VEHICLES,
  payload: {
    vin,
  }
});

export const saveVehicle = vehicle => ({
  type: SAVE_VEHICLE,
  payload: {
    vehicle,
  }
});

// THUNK
export const fetchVehicleByPage = pageId => {
  return (dispatch) => {
    return axios.get(`${apiUrl}?page=${pageId}`)
      .then(({data}) => {
        dispatch(saveVehicles(data.data.vehicles))
      })
      .catch(error => {
        throw(error);
      });
  };
};

// THUNK
export const fetchVehicleByVin = vehicleVin => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${vehicleVin}`)
      .then(({data}) => {
        dispatch(saveVehicle(data.data.vehicle))
      })
      .catch(error => {
        throw(error);
      });
  };
};