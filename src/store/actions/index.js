import axios from 'axios'

// ACTION TYPES
export const SAVE_VEHICLES = 'SAVE_VEHICLES';
export const SAVE_VEHICLE = 'SAVE_VEHICLE';
export const SAVE_FAVORITE_VEHICLES = 'SAVE_FAVORITE_VEHICLES';
export const REMOVE_FAVORITE_VEHICLES = 'REMOVE_FAVORITE_VEHICLES';
export const UPDATE_MONTHLY_VEHICLE_PAYMENTS_PER_MILES = 'UPDATE_MONTHLY_VEHICLE_PAYMENTS_PER_MILES';
export const CLEAR_MONTHLY_VEHICLE_PAYMENTS_PER_MILES = 'CLEAR_MONTHLY_VEHICLE_PAYMENTS_PER_MILES';
const apiUrl = 'https://private-4e19e-interviewapi3.apiary-mock.com/vehicles';

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

export const updateMonthlyVehiclepaymentsPerMiles  = (monthly, miles) => ({
  type: UPDATE_MONTHLY_VEHICLE_PAYMENTS_PER_MILES,
  payload: {
    payments: {
      monthly,
      miles,
    },
  }
});

export const clearMonthlyVehiclePayments  = () => ({
  type: CLEAR_MONTHLY_VEHICLE_PAYMENTS_PER_MILES,
  payload: {
    payments: {
      monthly: 0,
      miles: 0,
    },
  }
});

// THUNK
export const fetchVehicleByPage = pageId => {
  return (dispatch) => {
    return axios.get(`${apiUrl}?page=${pageId}`)
      .then(({data}) => {
        return dispatch(saveVehicles(data.data.vehicles));
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
        return dispatch(saveVehicle(data.data.vehicle));
      })
      .catch(error => {
        throw(error);
      });
  };
};
