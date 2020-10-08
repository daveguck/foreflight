import React from 'react';

import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <h1 className='about__heading'>About This App</h1>
      <p className='about__text'>App to search Airport Information</p>
      <p className='about__text'>Version: 1.0.0</p>
    </div>
  );
};

export default About;
