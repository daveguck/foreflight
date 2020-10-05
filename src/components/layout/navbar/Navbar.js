import React, { useState, useContext } from 'react';
import ConditionsContext from '../../../context/conditions/conditionsContext';

import './Navbar.scss';

const Navbar = () => {
  const conditionsContext = useContext(ConditionsContext);

  const { getConditions, loading } = conditionsContext;

  const [text, setText] = useState('');

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    getConditions(text);
    setText('');
  };

  return (
    <header className='header'>
      <img
        src='/images/foreflightLogo.png'
        alt='foreflight logo'
        className='header__logo'
      />
      <form onSubmit={onSubmit} className='find-airport'>
        <input
          type='text'
          name='text'
          value={text}
          className='find-airport__input'
          placeholder='Search Airports'
          onChange={onChange}
        />
        <button className='find-airport__button'>
          <svg className='find-airport__button__icon'>
            <use xlinkHref='images/symbol-defs.svg#icon-magnifying-glass'></use>
          </svg>
        </button>
      </form>
      <nav className='user-nav'>
        <span className='user-nav__item'>Home</span>
        <span className='user-nav__item'>About</span>
      </nav>
    </header>
  );
};

export default Navbar;
