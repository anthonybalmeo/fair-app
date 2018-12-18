export const SAVE_VEHICLES = 'SAVE_VEHICLES';

export const saveVehicles = vehicles => ({
  type: SAVE_VEHICLES,
  payload: {
    vehicles,
  }
});