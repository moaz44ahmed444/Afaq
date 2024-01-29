import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import img1 from '../../../../Images/notDecoration/WhatsApp Image 2024-01-25 at 9.00.03 AM (1).jpeg';
import img2 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.42 PM (1).jpeg';
import axios from 'axios';

const AboutUs = () => {
  const [HomeData, setHomeData] = useState([]);
  async function getHome(){
    let response = await axios.get(``);
    setHomeData(response);
    console.log(response);
  }

  useEffect(()=>{
    // getHome();
  },[])
  return (
    <div className="home-about">
      <div className='row justify-content-center align-items-center py-3'>
        <div className=' col-lg-5 float-start position-relative mt-5 pt-6'>
          <h1 className='pt-3rem'>About Us</h1>
          <h3>We help to bring your dream home to reality</h3>
          <p className='text-white-50'>where artistry and innovation converge to transform spaces and elevate brands. We are a dynamic duo of advertising and interior design experts dedicated to crafting immersive experiences that captivate hearts and minds.</p>
        </div>
        <div className=' col-lg-6'>
          <div className='pt-5'>
            <div className="col-lg-6 float-start">
              <img src={img1} alt='' className='img1 rounded '/>
            </div>
            <div className="col-lg-6 float-end pt-5 mt-2">
              <img src={img2} alt='' className='img2 rounded ' />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default AboutUs