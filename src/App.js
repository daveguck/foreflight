import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import Airport from './components/layout/airport/Airport';

import './sass/App.scss';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Airport />
    </div>
  );
}

export default App;
