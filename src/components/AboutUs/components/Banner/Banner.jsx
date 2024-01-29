import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from 'axios';

const Banner = () => {
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
    <div className='Banner'>
      <div className='row h-100'>
        
        <div className='container col-4   Banner-Content ' >
          <h1 className=' '>About Our company</h1>

        </div>

        <div className='banner-image d-flex img-fuid col-lg-7'>
          
        </div>

      </div>
    </div>
  )
}

export default Banner;