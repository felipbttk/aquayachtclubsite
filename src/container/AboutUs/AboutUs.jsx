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
            <a href='#contact'><button type='button' className='custom__buttonn'>Special Requests</button> </a>
        </div>
    

         <div className='app__aboutus-content_knife flex__centerr'>
           <img src={images.likeKnife} alt="about_knife" />
        </div> 

         <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant' id='aboutUs'>Our History</h1>
            {/* <img src={images.spoon} alt="about_spoon" className='spoon__img' /> */}
            <p className='p__opensans1'>Back to April 2013 the spirit from Aqua Yacht Club took the first place in Miami. <br/>
              After 6 Years of success in the USA,the CEO from the company, Mr George Korfias decided to go back to the home town of Leros Island in Greece,
              a small island with a lot of family memories and a smooth kind of life.<br/>2019 was the first year of success in Leros Island in Yachting
              and luxury services.2020 the family from Aqua Yacht Club became bigger and a new office in Kos Island born.<br/>In future steps Aqua Yacht Club will took place
              in Mykonos and Corfu island.<br/>
              We are happy to see you and see you again.<br/><br/>
              George Korfias

            </p>
            {/* <button type='button' className='custom__buttonn'>know more</button> */}
        </div>

    </div>
  </div>
);

export default AboutUs;
