import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bgg flex__centerr section__paddingg' id='services'>
    {/* <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="g letter" />
    </div> */}
    
    <div className='app__aboutus-content flex__center_about'>
        <div className='app__aboutus-content_about'>
            <h1 className='headtext__cormorant'>Services</h1>
            {/* <img src={images.spoon} alt="about_spoon" className='spoon__img' /> */}
            <p className='p__opensans'>Check In</p>
            <p className='p__opensans'>Check Out</p>
            <p className='p__opensans'>Commercial Declarations</p>
            <p className='p__opensans'>Custom Clearances</p>
            <p className='p__opensans'>Transit Log Cases</p>
            <p className='p__opensans'>Wintering Contract</p>
            <p className='p__opensans'>Birthing Arrangements</p> 
            <button type='button' className='custom__buttonn'>XXXX</button>
        </div>
    

         <div className='app__aboutus-content_knife flex__centerr'>
           <img src={images.likeKnife} alt="about_knife" />
        </div> 

         <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Our History</h1>
            {/* <img src={images.spoon} alt="about_spoon" className='spoon__img' /> */}
            <p className='p__opensans'>Some information about us and 50-60 words about the company</p>
            <button type='button' className='custom__buttonn'>Know More</button>
        </div>

    </div>
  </div>
);

export default AboutUs;
