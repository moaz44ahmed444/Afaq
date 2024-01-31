import React, { useEffect, useState } from 'react';
import './OurServices.css';
import icon1 from '../../../../Images/Service Icon.svg';
import icon2 from '../../../../Images/Service Icon (1).svg';
import icon3 from '../../../../Images/Service Icon (2).svg';
import axios from 'axios';


const OurServices = () => {

  const [servicesData, setServicesData] = useState([]);

  async function getServices() {
    try {
      let response = await axios.get(`https://pijet.app/afaq/api/getServices`);
      setServicesData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching services data:', error);
    }
  }

  useEffect(() => {
    getServices();
  }, []);

  const renderServices = () => {
    return servicesData.map((service) => (
      <div className="col-lg-4" key={service? service.id : ''}>
        <div className="card p-4 rounded-0" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"grey"}}>
          <img src={`https://pijet.app/afaq/uploads/services/source/${service? service.icon : ''}`} alt={service? service.alt_img : ''} className="card-img-top" />
          <div className="card-body">
            <h1 className="card-title">{service? service.name_service_en : ''}</h1>
            <p className="card-text">{service? service.text_en : ''}</p>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className='ourServices'>
      <div className="container">
        <div className="info pt-5">
          <h1 className="title pt-5 mb-5">Our Services</h1>
          <h3 className='text-white-50'>We provide the best solutions for your dream home</h3>
        </div>

        <div className="row pt-5 col-lg-11 ">
          {renderServices()}
        </div>
      </div>
    </div>
  )
}

export default OurServices