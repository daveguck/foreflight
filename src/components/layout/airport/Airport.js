import React, { useContext } from 'react';
import AirportContext from '../../../context/airport/airportContext';

import './Airport.scss';

const Airport = () => {
  const airportContext = useContext(AirportContext);

  const { airport } = airportContext;

  console.log(airport);

  if (Object.keys(airport).length <= 1) {
    return (
      <section className='airport'>
        <h1 className='airport__name'>{airport.name}</h1>
        <p className='airport__icao-list'>
          Available icao's: kaus, khou, egll, 50r
        </p>
      </section>
    );
  } else {
    return (
      <section className='airport'>
        <h1 className='airport__name'>{airport.name}</h1>
        <div className='airport__latlong'>
          <div className='latitude'>
            <p className='latitude__title'>Latitude:</p>
            <p className='latitude__coordinates'>{airport.latitude}</p>
          </div>
          <div className='longitude'>
            <p className='longitude__title'> Longitude:</p>
            <p className='longitude__coordinates'>{airport.longitude}</p>
          </div>
        </div>
      </section>
    );
  }
};

export default Airport;
