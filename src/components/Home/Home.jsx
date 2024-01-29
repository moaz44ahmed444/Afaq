import React, { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import Projects from './components/Projects/Projects';
import Experiance from './components/Experiance/Experiance';
import OurServices from './components/OurServices/OurServices';
import Feedback from './components/Feedback/Feedback';
import Process from './components/Process/Process';
import axios from 'axios';

const Home = () => {
  // const [HomeData, setHomeData] = useState([]);
  // async function getHome(){
  //   let response = await axios.get(`https://pijet.app/afaq/api/getHomeSliders`);
  //   setHomeData(response);
  //   console.log(response);
  // }

  // useEffect(()=>{
  //   getHome();
  // },[])
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