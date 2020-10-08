import React from 'react';
import ConditionsState from './context/conditions/ConditionsState';
import AirportState from './context/airport/AirportState';

import Navbar from './components/layout/navbar/Navbar';
import Airport from './components/layout/airport/Airport';
import Conditions from './components/layout/conditions/Conditions';
import Runways from './components/layout/runways/Runways';

import './sass/App.scss';

function App() {
  return (
    <AirportState>
      <ConditionsState>
        <div className='container'>
          <Navbar />
          <Airport />
          <Runways />
          <Conditions />
        </div>
      </ConditionsState>
    </AirportState>
  );
}

export default App;
