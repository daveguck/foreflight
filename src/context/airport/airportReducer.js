import { GET_AIRPORT, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_AIRPORT:
      return {
        ...state,
        airport: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
