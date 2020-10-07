import React, { useContext } from 'react';
import AirportContext from '../../../context/airport/airportContext';

import './Airport.scss';

const Airport = () => {
  const airportContext = useContext(AirportContext);

  const { airport } = airportContext;

  console.log(airport);

  if (Object.keys(airport).length === 0) {
    return null;
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
        <div className='airport__runways'>
          <h2 className='runways-title'>Available Runways:</h2>
          <div className='runway'>Runway1</div>
          <div className='runway'>Runway2</div>
          <div className='runway'>Runway3</div>
          <div className='runway'>Runway4</div>
          <div className='runway'>Runway5</div>
        </div>
      </section>
    );
  }
};

export default Airport;
