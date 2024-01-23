import React from 'react';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import Projects from './components/Projects/Projects';
import Experiance from './components/Experiance/Experiance';
import OurServices from './components/OurServices/OurServices';
import Feedback from './components/Feedback/Feedback';
import Process from './components/Process/Process';

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Projects />
      <Experiance />
      <OurServices />
      <Feedback />
      <Process />
    </>
  )
}

export default Home