import React, { useEffect, useState } from 'react';
import './OurServiceBanner.css'
import axios from 'axios';

const OurServiceBanner = () => {
  const [OurServiceData, setOurServiceData] = useState([]);
  async function getOurService(){
    let response = await axios.get(``);
    setOurServiceData(response);
    console.log(response);
  }

  useEffect(()=>{
    // getOurService();
  },[]);
  return (
    <div className='OurServiceBanner'>
      <div className='row h-100'>
        
        <div className='container col-4   Banner-Content ' >
          <h1 className=' '>Our Services</h1>

        </div>

        <div className='OurServiceBanner-image d-flex img-fuid col-lg-7' >
          
        </div>

      </div>
    </div>
  )
}

export default OurServiceBanner