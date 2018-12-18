export const SAVE_VEHICLES = 'SAVE_VEHICLES';
export const SAVE_VEHICLE = 'SAVE_VEHICLE';

export const saveVehicles = vehicles => ({
  type: SAVE_VEHICLES,
  payload: {
    vehicles,
  }
});

export const saveVehicle = vehicle => ({
  type: SAVE_VEHICLE,
  payload: {
    vehicle,
  }
});