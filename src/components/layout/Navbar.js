import React from 'react';

export const Navbar = () => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__container'>
          <img
            src='/images/foreflightLogo.png'
            alt='foreflight logo'
            className='header__logo'
          />
          <form action='#' class='search'>
            <input
              type='text'
              class='search__input'
              placeholder='Search Airports'
            />
            {/* <button class="search__button">
                      <svg class="search__icon">
                          <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
                      </svg>
                  </button> */}
          </form>
          <nav className='user-nav'>
            <span className='user-nav__item'>Home</span>
            <span className='user-nav__item'>About</span>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
