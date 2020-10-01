import React from 'react';
import ConditionsState from './context/conditions/ConditionsState';

import Navbar from './components/layout/navbar/Navbar';
import Airport from './components/layout/airport/Airport';

import './sass/App.scss';

function App() {
  return (
    <ConditionsState>
      <div className='container'>
        <Navbar />
        <Airport />
      </div>
    </ConditionsState>
  );
}

export default App;
