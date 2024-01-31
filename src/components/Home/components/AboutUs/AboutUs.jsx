import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import img1 from '../../../../Images/notDecoration/WhatsApp Image 2024-01-25 at 9.00.03 AM (1).jpeg';
import img2 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.42 PM (1).jpeg';
import axios from 'axios';

const AboutUs = () => {

  const [AboutUsData, setAboutUsData] = useState([]);

    async function getAboutUs(){
        try {
            let {data} = await axios.get(`https://pijet.app/afaq/api/getAboutStrucs`);
            setAboutUsData(data.data);
            console.log(data.data);
        } catch (error) {
            console.error('Error fetching Navbar data:', error);
        }
    }
  
    useEffect(()=>{
       getAboutUs();
    },[]);

    const aboutData = AboutUsData.find(item => item.id === 1);
    const goalsData = AboutUsData.find(item => item.id === 5);

  return (
    <div className="home-about">
      <div className='row justify-content-center align-items-center py-3'>
        <div className=' col-lg-5 float-start position-relative mt-5 pt-6'>
          <h1 className='pt-3rem'>{aboutData ? aboutData.title : ''}</h1>
          {/* <h3></h3> */}
          <p className='text-white-50'>{aboutData ? aboutData.text : ''}</p>
        </div>
        <div className=' col-lg-6'>
          <div className='pt-5'>
            <div className="col-lg-6 float-start">
              <img src={`https://pijet.app/afaq/uploads/aboutStrucs/source/${aboutData ? aboutData.image : ''}`} alt='' className='img1 rounded '/>
            </div>
            <div className="col-lg-6 float-end pt-5 mt-2">
              <img src={`https://pijet.app/afaq/uploads/aboutStrucs/source/${goalsData ? goalsData.image : ''}`} alt='' className='img2 rounded ' />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default AboutUs