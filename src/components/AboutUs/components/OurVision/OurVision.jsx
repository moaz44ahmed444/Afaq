import React from 'react';
import './OurVision.css';
import Image from '../../../../Images/notDecoration/WhatsApp Image 2024-01-25 at 9.00.37 AM.jpeg'
const OurVision = () => {
  return (
    <div className='OurVision'>
        <div className="container">
            <div className="row justify-content-center align-items-center justify-content-between">
                <div className="col-lg-4">
                    <div className="title">Our Vision</div>
                    <p>It seeks to play a distinguished role in cooperating with our clients and consulting partners in the field of advertising throughout the Kingdom and abroad, in order to ensure our position in the field of advertising.</p>
                </div>
                <div className="col-lg-8 ps-5">
                    <img src={Image} alt='' className='OurVisionImage'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurVision;