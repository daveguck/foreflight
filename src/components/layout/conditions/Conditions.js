import React, { useContext } from 'react';
import ConditionsContext from '../../../context/conditions/conditionsContext';

import './Conditions.scss';

const Conditions = () => {
  const conditionsContext = useContext(ConditionsContext);

  const { conditions, loading } = conditionsContext;

  return (
    <section className='conditions'>
      <h1 className='conditions__title'>Current Weather Conditions</h1>
      <div className='conditions__weather'>
        <div className='conditions__weather__card'>
          <svg className='icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-thermometer'></use>
          </svg>
          <h4 className='label'>Temperature</h4>
          <p className='temperature'>75&deg;F</p>
        </div>
        <div className='conditions__weather__card'>
          <svg className='icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-drop'></use>
          </svg>
          <h4 className='label'>Relative Humidity</h4>
          <p className='temperature'>43%</p>
        </div>
        <div className='conditions__weather__card'>
          <svg className='icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-cloud'></use>
          </svg>
          <h4 className='label'>Cloud Coverage</h4>
          <p className='temperature'>Mostly Cloudy</p>
        </div>
        <div className='conditions__weather__card'>
          <svg className='icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-eye'></use>
          </svg>
          <h4 className='label'>Visibility</h4>
          <p className='temperature'>10sm</p>
        </div>
        <div className='conditions__weather__card'>
          <svg className='icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-air'></use>
          </svg>
          <h4 className='label'>Wind Speed</h4>
          <p className='temperature'>75&deg;F</p>
        </div>
        <div className='conditions__weather__card'>
          <svg className='icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-hair-cross'></use>
          </svg>
          <h4 className='label'>Wind Direction</h4>
          <p className='temperature'>NNW</p>
        </div>
      </div>
    </section>
  );
};
export default Conditions;
