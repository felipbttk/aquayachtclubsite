import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp';
import  images from  '../constants/images';
import './index.css';
import reportWebVitals from './reportWebVitals';

const WhatsApp = () => {

  return (
      <FloatingWhatsApp 
        accountName='Felipe'
        avatar = { images.profilePicture }
        phoneNumber= '41762224283'
        statusMessage = 'Typically replies within 10 Minutes'
        chatMessage = 'Hello there!'
        styles={{backgroundImage: "images.profilePicture"}}
        height = '65%'
      />
  )
  reportWebVitals();
}

export default WhatsApp;