import React from 'react';

import Airport from '../layout/airport/Airport';
import Conditions from '../layout/conditions/Conditions';
import Runways from '../layout/runways/Runways';

export const Home = () => {
  return (
    <>
      <Airport />
      <Runways />
      <Conditions />
    </>
  );
};

export default Home;
