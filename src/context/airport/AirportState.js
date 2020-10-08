import React, { useReducer } from 'react';
import AirportContext from './airportContext';
import AirportReducer from './airportReducer';
import { GET_AIRPORT, SET_LOADING } from '../types';

const AirportState = (props) => {
  const initialState = {
    airport: {
      name:
        'Enter an airport identifier (icao) for information about that airport',
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(AirportReducer, initialState);

  const getAirport = async (identifier) => {
    const response = await fetch(
      `http://localhost:3000/airports/${identifier}.json`
    );

    const data = await response.json();

    console.log(data);

    dispatch({
      type: GET_AIRPORT,
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AirportContext.Provider
      value={{
        airport: state.airport,
        loading: state.loading,
        getAirport,
      }}
    >
      {props.children}
    </AirportContext.Provider>
  );
};

export default AirportState;
