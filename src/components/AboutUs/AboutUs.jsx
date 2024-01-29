import React, { useEffect, useState } from 'react'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import OurVision from './components/OurVision/OurVision'
import OurValues from './components/OurValues/OurValues'
import axios from 'axios'

const AboutUs = () => {
  const [AboutUsData, setAboutUsData] = useState([]);
  async function getAboutUs(){
    let response = await axios.get(``);
    setAboutUsData(response);
    console.log(response);
  }

  useEffect(()=>{
    // getAboutUs();
  },[]);
  return (
    <>
      <Banner />
      <About />
      <OurVision/>
      <OurValues />
    </>
  )
}

export default AboutUs