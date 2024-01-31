import React, { useEffect, useState } from 'react';
import './OurVision.css';
import Image from '../../../../Images/notDecoration/WhatsApp Image 2024-01-25 at 9.00.37 AM.jpeg';
import axios from 'axios';


const OurVision = () => {
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

    const visionData = AboutUsData.find(item => item.id === 3);
    
  return (
    <div className='OurVision'>
        <div className="container" >
            <div className="row justify-content-center align-items-center justify-content-between">
                <div className="col-lg-4">
                    <div className="title">{visionData ? visionData.title : ''}</div>
                    <p>{visionData ? visionData.text : ''}</p>
                </div>
                <div className="col-lg-8 ps-5">
                    <img src={`https://pijet.app/afaq/uploads/aboutStrucs/source/${visionData ? visionData.image : ''}`} alt='' className='OurVisionImage'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurVision;