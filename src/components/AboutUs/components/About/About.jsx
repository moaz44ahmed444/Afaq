import React, { useEffect, useState } from 'react';
import './About.css';
import Image1 from'../../../../Images/notDecoration/WhatsApp Image 2024-01-25 at 9.00.01 AM (4).jpeg';
import Image2 from'../../../../Images/WhatsApp Image 2024-01-16 at 4.43.21 PM (3).jpeg';
import axios from 'axios';

const About = () => {
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
    <div className='about'>
        <div className="container " >
            <div className='aboutData' style={{width: '1206px'}} >
                <div className="Title text-center">{aboutData ? aboutData.title : ''}</div>
                <div className="description text-center p-5">
                {aboutData ? aboutData.text : ''}
                </div>
            </div>

            <div className="row d-flex pt-5 justify-content-between">
                <div className="col-lg-8">
                    <img src={`https://pijet.app/afaq/uploads/aboutStrucs/source/${aboutData ? aboutData.image : ''}`} alt='' className='image1 image-fluid'/>
                </div>
                <div className="col-lg-4 ">
                    <img src={`https://pijet.app/afaq/uploads/aboutStrucs/source/${goalsData ? goalsData.image : ''}`}  alt='' className='image2 image-fluid'/>
                </div>
            </div>

            <div className="row d-flex pt-5 mt-5 justify-content-between">
                <div className="col-lg-4">
                    <h3 className='WhatWeDo'>What we do</h3>
                </div>
                <div className="col-lg-8 ">
                    <p className='text-white-50'>Provides a high level of printing. "Afaq Professionalism" manufactures integrated advertisements, as we have the experience to complete all<br/> <br/>

                        The stages of advertising, starting from the commitment to prepare the design, until the delivery of the work through an advanced and integrated line, and a distinguished work team to keep pace with technical development.<br/> <br/>

                        And modern technology in advertising. We seek to satisfy our customers, gain their precious trust, and maintain a strong, growing and sustainable relationship with them.</p>
                </div>
                <div className="stat col-lg-12 pt-5 mt-5 text-center">
                    <div className="col-lg-3">
                        <h2>100<span>M</span></h2>
                        <p>Client Satisfaction</p>
                    </div>
                    <div className="col-lg-3">
                        <h2>24 <span>h</span></h2>
                        <p>Expert Support Team</p>
                    </div>
                    <div className="col-lg-3">
                        <h2>98 <span>K+</span></h2>
                        <p>Sales Count</p>
                    </div>
                    <div className="col-lg-3">
                        <h2>208 <span>+</span></h2>
                        <p>Client Worldwide</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About