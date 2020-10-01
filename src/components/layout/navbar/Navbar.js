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
          className='search__input'
          placeholder='Search Airports'
        />
        {/* <button class="search__button">
                      <svg className="search__icon">
                          <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
                      </svg>
                  </button> */}
      </form>
      <nav className='user-nav'>
        <span className='user-nav__item'>Home</span>
        <span className='user-nav__item'>About</span>
      </nav>
    </header>
  );
};

export default Navbar;
