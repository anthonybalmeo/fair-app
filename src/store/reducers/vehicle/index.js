import { SAVE_VEHICLE } from '../../actions'

const initialState = null;


const vehicle = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_VEHICLE: {
      return action.payload.vehicle;
    }
    default: {
      return state;
    }
  }
};

export default vehicle;
