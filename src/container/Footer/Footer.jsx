import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='contact'>
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Mpoumpoulinas 3 Street, Kos 85300, Greece</p>
        <p className='p__opensans'>Tel + WhatsApp: +41 762224283</p>
        <p className='p__opensans'>Email: kos@aquagreece.com</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.logoo} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to loose yourself in the service of others"</p>
        {/* <img src={images.spoon} alt="spoon" className='spoon__img'  style={{ marginTop: 15 }}/> */}
        <div className='app__footer-links_icons'>
          {/* <a href="https://www.facebook.com/"  target='_blank' ><FiFacebook /></a> 
          <a href="https://twitter.com/"  target='_blank' > <FiTwitter /></a>  */}
          <a href="https://www.instagram.com/aqua_yacht.club.kos/" target='_blank' ><FiInstagram /></a> 
        </div>
     </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturady-Sunday</p>
        <p className='p__opensans'>07:00 am - 12:00 am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Aqua Yacht Club. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
