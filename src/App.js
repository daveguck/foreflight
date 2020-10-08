import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConditionsState from './context/conditions/ConditionsState';
import AirportState from './context/airport/AirportState';

import Navbar from './components/layout/navbar/Navbar';

import About from './components/pages/About';
import Home from './components/pages/Home';

import './sass/App.scss';

function App() {
  return (
    <AirportState>
      <ConditionsState>
        <Router>
          <div className='App'></div>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </ConditionsState>
    </AirportState>
  );
}

export default App;
