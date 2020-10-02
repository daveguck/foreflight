import React from 'react';

import './Airport.scss';

export const Airport = () => {
  return (
    <section className='airport'>
      <h1 className='airport__name'>Austin Bergstrom (kaus)</h1>
      <div className='airport__latlong'>
        <div className='latitude'>
          <p className='latitude__title'>Latitude:</p>
          <p className='latitude__coordinates'>30.19452702415562</p>
        </div>
        <div className='longitude'>
          <p className='longitude__title'> Longitude:</p>
          <p className='longitude__coordinates'>-97.66987607813589</p>
        </div>
      </div>
      <div className='airport__runways'>
        <h2 className='runways-title'>Available Runways:</h2>
        <p className='runway'>Runway1</p>
        <p className='runway'>Runway2</p>
        <p className='runway'>Runway3</p>
        <p className='runway'>Runway4</p>
        <p className='runway'>Runway5</p>
      </div>
    </section>
  );
};

export default Airport;
