import React from 'react'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Create,   } from './container';
import  SupportEngine  from './SupportEngine/index';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Create />
    <Footer />  
    <SupportEngine />
  </div>
);

export default App;
