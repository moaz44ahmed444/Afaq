import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from 'axios';

const Banner = () => {

  const [HomeData, setHomeData] = useState([]);

  async function getHome(){
    try {
      let response = await axios.get(`https://pijet.app/afaq/api/getHomeSliders`);
      setHomeData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching Home data:', error);
    }
  }

  useEffect(()=>{
     getHome();
  },[])
  return (
    <div className='Home-Banner'>
      <div className='row h-100'>
        
        <div className='container col-4 ' >
          <h1 className='pb-2'>{HomeData[0] ? HomeData[0].title : ''}</h1>
          <p className='p-banner pb-5 '>{HomeData[0] ? HomeData[0].text : ''}</p>
        </div>

        <div
          className='banner-image img-fluid col-lg-7'
          style={{
            backgroundImage: `url(https://pijet.app/afaq/uploads/sliders/home-sliders/source/${HomeData[0] ? HomeData[0].image : ''})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '60% 40%',
          }}
        ></div>

      </div>
    </div>
  )
}

export default Banner;