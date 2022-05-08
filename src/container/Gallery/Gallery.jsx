import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { SubHeading } from '../../components';
import { images, } from '../../constants';
import './Gallery.css';

const galleryImages = [images.somar, images.survivor, images.faribana, images.pozitron, images.delusha]

const Gallery = () => {
 const scrollRef = React.useRef(null);

 const scroll = (direction) => {
   const { current } = scrollRef;

   if(direction === 'left') {
     current.scrollLeft -= 300;
   }  if (direction === 'right' ) {
     current.scrollLeft += 300;
   }
 }

 return (
  <div className='app__gallery flex__center' id='gallery'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}></p>
      {/* <button type='buttom' className='custom__button'>View More</button> */}
      <a href="https://www.instagram.com/aqua_yacht.club.kos/" target='_blank' ><FiInstagram /></a>
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery" />
            <BsInstagram className='gallery__image-icon' />
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
);

 }

export default Gallery;
