import { UPDATE_MONTHLY_VEHICLE_PAYMENTS_PER_MILES, CLEAR_MONTHLY_VEHICLE_PAYMENTS_PER_MILES } from '../../actions';

const initialState = {
  monthly: 0,
  miles: 0,
};

export const paymentsPerMiles = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MONTHLY_VEHICLE_PAYMENTS_PER_MILES: {
      return action.payload.payments;
    }
    case CLEAR_MONTHLY_VEHICLE_PAYMENTS_PER_MILES: {
      return action.payload.payments;
    }
    default: {
      return state;
    }
  }
};

export default paymentsPerMiles;
