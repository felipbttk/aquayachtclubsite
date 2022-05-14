import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapperr section__paddingg' >
    <div className='app__wrapper_infoo'>
        <SubHeading title='Welcome on Board'/>
        <h1 className='app__header-h1'>The Key To Yachtingggg Formalities</h1>
        {/* <p className='p__opensans' style={{ margin: '2rem 0' }}>This is a comment for what we serve about our products  and our coltoure</p> */}
      <a href="#services">  <button type='button' className='custom__buttonn'>Our Servises</button> </a>
    </div>

    <div className='app__wrapper_imgg'>
      <img src={images.firstpic} alt="header img" />
    </div>
  </div>
);

export default Header;
