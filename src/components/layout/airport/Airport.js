import React from 'react';

import './Airport.scss';

const Airport = () => {
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
        <div className='runway'>Runway1</div>
        <div className='runway'>Runway2</div>
        <div className='runway'>Runway3</div>
        <div className='runway'>Runway4</div>
        <div className='runway'>Runway5</div>
      </div>
    </section>
  );
};

export default Airport;
