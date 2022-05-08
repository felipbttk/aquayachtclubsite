import React from 'react'

import { AboutUs, Footer, Gallery, Header, Create,   } from './container';
import  SupportEngine  from './SupportEngine/index';
import WhatsApp from './WhatsApp/WhatsApp';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <Create />
    <Footer />   
    {/* <SupportEngine /> */}
    <WhatsApp />
  </div>
);

export default App;
