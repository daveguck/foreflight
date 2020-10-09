import React, { useContext } from 'react';
import AirportContext from '../../../context/airport/airportContext';

import RunwayItem from './RunwayItem';

import './Runways.scss';

export const Runways = () => {
  const airportContext = useContext(AirportContext);

  const { airport } = airportContext;

  if (Object.keys(airport).length <= 1) {
    return null;
  } else {
    return (
      <div className='runways'>
        <h1 className='runways__title'>Available Runways</h1>
        <div className='runways__runway'>
          {airport.runways.map((runway) => (
            <RunwayItem runway={runway} />
          ))}
        </div>
      </div>
    );
  }
};

export default Runways;
