import { UPDATE_MONTHLY_VEHICLE_PAYMENTS, CLEAR_MONTHLY_VEHICLE_PAYMENTS } from '../../actions'

const initialState = {
  monthly: 0,
};

export const payments = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MONTHLY_VEHICLE_PAYMENTS: {
      return action.payload.payments;
    }
    case CLEAR_MONTHLY_VEHICLE_PAYMENTS: {
      return action.payload.payments;
    }
    default: {
      return state;
    }
  }
};

export default payments;
