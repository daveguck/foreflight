import React, { useReducer } from 'react';
import AirportContext from './airportContext';
import AirportReducer from './airportReducer';
import { GET_AIRPORT } from '../types';

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
      `https://hidden-coast-89842.herokuapp.com//airports/${identifier}.json`
    );

    const data = await response.json();

    dispatch({
      type: GET_AIRPORT,
      payload: data,
    });
  };

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
