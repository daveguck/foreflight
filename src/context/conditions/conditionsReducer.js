import { GET_CONDITIONS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONDITIONS:
      return {
        ...state,
        conditions: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
