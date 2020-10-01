import React from 'react';

import './Navbar.scss';

export const Navbar = () => {
  return (
    <header className='header'>
      <img
        src='/images/foreflightLogo.png'
        alt='foreflight logo'
        className='header__logo'
      />
      <form action='#' className='find-airport'>
        <input
          type='text'
          className='find-airport__input'
          placeholder='Search Airports'
        />
        <button className='find-airport__button'>
          <svg className='find-airport__button__icon'>
            <use xlinkHref='images/sprite.svg#icon-magnifying-glass'></use>
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
