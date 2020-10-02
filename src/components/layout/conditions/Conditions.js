import React, { useContext } from 'react';
import ConditionsContext from '../../../context/conditions/conditionsContext';

import './Conditions.scss';

export const Conditions = () => {
  return (
    <section className='conditions'>
      <h1 className='conditions__title'>Current Weather Conditions</h1>
    </section>
  );
};
export default Conditions;
