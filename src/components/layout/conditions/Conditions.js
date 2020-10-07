import React, { useContext } from 'react';
import ConditionsContext from '../../../context/conditions/conditionsContext';
import { convertToFahrenheit, knotsToMPH } from '../../../helperFuncs';

import './Conditions.scss';

const Conditions = () => {
  const conditionsContext = useContext(ConditionsContext);

  const { conditions } = conditionsContext;

  if (Object.keys(conditions).length === 0) {
    return null;
  } else {
    return (
      <section className='conditions'>
        <h1 className='conditions__title'>Current Weather Conditions</h1>
        <div className='conditions__weather'>
          <div className='conditions__weather__card'>
            <svg className='icon'>
              <use xlinkHref='images/symbol-defs.svg#icon-thermometer'></use>
            </svg>
            <h4 className='label'>Temperature</h4>
            <p className='temperature'>
              {conditions.tempC
                ? `${convertToFahrenheit(conditions.tempC)}°`
                : `Temperature is not available`}
            </p>
          </div>
          <div className='conditions__weather__card'>
            <svg className='icon'>
              <use xlinkHref='images/symbol-defs.svg#icon-drop'></use>
            </svg>
            <h4 className='label'>Relative Humidity</h4>
            <p className='humidity'>{conditions.relativeHumidity}%</p>
          </div>
          <div className='conditions__weather__card'>
            <svg className='icon'>
              <use xlinkHref='images/symbol-defs.svg#icon-cloud'></use>
            </svg>
            <h4 className='label'>Cloud Coverage</h4>
            <p className='cloud-coverage'>
              {conditions.cloudLayers[0].coverage.toUpperCase()}
            </p>
          </div>
          <div className='conditions__weather__card'>
            <svg className='icon'>
              <use xlinkHref='images/symbol-defs.svg#icon-eye'></use>
            </svg>
            <h4 className='label'>Visibility</h4>
            <p className='visibility'>{`${conditions.visibility.distanceSm}SM`}</p>
          </div>
          <div className='conditions__weather__card'>
            <svg className='icon'>
              <use xlinkHref='images/symbol-defs.svg#icon-air'></use>
            </svg>
            <h4 className='label'>Wind Speed</h4>
            <p className='temperature'>{`${Math.ceil(
              knotsToMPH(conditions.wind.speedKts)
            )}MPH`}</p>
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
  }
};

export default Conditions;
