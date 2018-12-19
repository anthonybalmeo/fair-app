import { SAVE_VEHICLES } from '../../actions';

const initialState = null;


const vehicles = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_VEHICLES: {
      return action.payload.vehicles;
    }
    default: {
      return state;
    }
  }
};

export default vehicles;
