import { SAVE_FAVORITE_VEHICLES, REMOVE_FAVORITE_VEHICLES } from '../../actions';

const vehicle = (state = [], action) => {
  switch (action.type) {
    case SAVE_FAVORITE_VEHICLES: {
      return [...state, { vin: action.payload.vin }];
    }
    case REMOVE_FAVORITE_VEHICLES: {
      return state.filter(({vin}) => vin !== action.payload.vin);
    }
    default: {
      return state;
    }
  }
};

export default vehicle;
