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
          <h4 className='temperature-label'>Temperature</h4>
          <p className='temperature'>75&deg;F</p>
        </div>
        <div className='conditions__weather__card'>FOOBAR!</div>
        <div className='conditions__weather__card'>FOOBAR!</div>
        <div className='conditions__weather__card'>FOOBAR!</div>
        <div className='conditions__weather__card'>FOOBAR!</div>
        <div className='conditions__weather__card'>FOOBAR!</div>
      </div>
    </section>
  );
};
export default Conditions;
