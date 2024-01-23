import React from 'react'
import './ProjectsContent.css';
import MinimalBedroom1 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.44 PM.jpeg';
import MinimalBedroom2 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.43 PM (2).jpeg';
import ClassicMinimalBedroom from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.45 PM (1).jpeg';
import ModernBedroom from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.44 PM (1).jpeg';
import MinimalBedroomTable from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.44 PM (2).jpeg';
import SystemTable from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.45 PM.jpeg';
import ModernMedroom1 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.45 PM.jpeg';
import ModernMedroom2 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.45 PM (1).jpeg';
import rightArrow from '../../../../Images/right.svg';

const TallCard = ({ image, title }) => {
    return(
        <div className="tallPic col-lg-6">
            <img src={image} className='' alt=''/>
            <div className="cardData p-2">
                <div className='row'>
                    <h6>{title}</h6>
                    <p>Decor / Artchitecture</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className='rightArrow' width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#E5BD63"/>
                    <path d="M32 44L40 35L32 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}
const ShortCard = ({ image, title }) => {
    return (
        <div className="shortPic col-lg-6 ">
            <img src={image} className='' alt=''/>
            <div className="cardData p-2">
                <div className='row'>
                    <h6>{title}</h6>
                    <p>Decor / Artchitecture</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className='rightArrow' width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#E5BD63"/>
                    <path d="M32 44L40 35L32 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}
const ProjectsContent = () => {
  return (
    <div className='ProjectsContent '>
        <div className="container align-items-center justify-content-center" >
            <div className="categories pt-5  ">
                <p>Coffe</p>
                <p className='goldP'>Brands</p>
                <p>ADS</p>
                <p>Shop</p>
            </div>

            <div className="row ">
                <div className="cards col-lg-6 ">
                        <TallCard image={MinimalBedroom1} title="Minimal Bedroom" />                
                        <ShortCard image={ClassicMinimalBedroom} title="Classic Minimal Bedroom" />
                        <TallCard image={MinimalBedroomTable} title="Minimal Bedroom table" />
                        <ShortCard image={MinimalBedroom1} title="Modern Medroom" />
                </div>
                <div className="cards col-lg-6">
                        <ShortCard image={MinimalBedroom2} title="Minimal Bedroom" />
                        <TallCard image={ModernBedroom} title="Bodern Medroom" />
                        <ShortCard image={SystemTable} title="System Table" />
                        <ShortCard image={ClassicMinimalBedroom} title="Modern Bedroom" />
                </div>
            </div>

            <div className="pagination">
                <div className="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <circle cx="26.5" cy="26" r="26" fill="#E5BD63"/>
                    <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="white" fontSize="20">
                        01
                    </text>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#E5BD63"/>
                    <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="white" fontSize="20">
                        02
                    </text>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#E5BD63"/>
                    <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="white" fontSize="20">
                        03
                    </text>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#E5BD63"/>
                    <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="white" fontSize="20">
                        04
                    </text>
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProjectsContent