import React, { useState, useContext } from 'react';
import ConditionsContext from '../../../context/conditions/conditionsContext';
import AirportContext from '../../../context/airport/airportContext';

import { Link, useLocation } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const { pathname } = useLocation();

  const conditionsContext = useContext(ConditionsContext);
  const airportContext = useContext(AirportContext);

  const { getConditions } = conditionsContext;
  const { getAirport } = airportContext;

  const [text, setText] = useState('');

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    getConditions(text);
    getAirport(text);
    setText('');
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img
          src='/images/foreflightLogo.png'
          alt='foreflight logo'
          className='header__logo'
        />
      </Link>
      <form onSubmit={onSubmit} className='find-airport'>
        <input
          type='text'
          name='text'
          value={text}
          className='find-airport__input'
          placeholder='Search Airports'
          onChange={onChange}
          disabled={pathname === '/about' ? true : false}
          required
        />
        <button
          className='find-airport__button'
          disabled={pathname === '/about' ? true : false}
        >
          <svg className='find-airport__button__icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-magnifying-glass'></use>
          </svg>
        </button>
      </form>
      <nav className='user-nav'>
        <span className='user-nav__item'>
          <Link to='/' className='link'>
            Home
          </Link>
        </span>
        <span className='user-nav__item'>
          <Link to='/about' className='link'>
            About
          </Link>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
