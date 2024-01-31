import React, { useEffect, useState } from 'react'
import Arrow from '../../../../Images/Arrow.svg';
import  './OurServiceContent.css';
import section1 from '../../../../Images/section1.jpg';
import section2 from '../../../../Images/section2.jpg';
import section3 from '../../../../Images/section3.jpg';
import section4 from '../../../../Images/section4.jpg';
import logosec1 from '../../../../Images/logosec1.svg';
import logosec2 from '../../../../Images/logosec2.svg';
import logosec3 from '../../../../Images/logosec3.svg';
import logosec4 from '../../../../Images/logosec4.svg';
import axios from 'axios';


const OurServiceContent = () => {
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
    return servicesData.map((service, index) => (
      <div key={service.id} className={`section row justify-content-between pt-5 align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
        <div className="col-lg-5">
          <img src={`https://pijet.app/afaq/uploads/services/source/${service.img}`} alt='' className='sectionPhoto' />
        </div>
        <div className="data row ps-5 col-lg-7">
          <img src={logosec1} alt='' className='logodesc col-lg-3'/>
          <h1 className='col-lg-3'>0{index + 1}</h1>
          <h3 className="col-lg-7">{service.name_service_en}</h3>
          <p className="ps-4">{service.text_en}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className='OurServiceContent'>
        <div className="container pb-5">
            <div className="content1 row col-lg-12 justify-content-center ">
                <div className="col-lg-3">
                    <h6>Project Plan</h6>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <p className='ReadMore'>Read More <img src={Arrow} alt=''/></p>
                </div>
                <div className="col-lg-3">
                    <h6>Project Plan</h6>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <p className='ReadMore'>Read More <img src={Arrow} alt=''/></p>
                </div>
                <div className="col-lg-3">
                    <h6>Project Plan</h6>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <p className='ReadMore'>Read More <img src={Arrow} alt=''/></p>
                </div>
                <div className="col-lg-3">
                    <h6>Project Plan</h6>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <p className='ReadMore'>Read More <img src={Arrow} alt=''/></p>
                </div>
                <div className="col-lg-3" style={{background: "rgba(28, 28, 28, 0.92)", padding: "73px 20px", borderRadius:"30px"}}>
                    <h6>Project Plan</h6>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <p className='ReadMore'>Read More <img src={Arrow} alt=''/></p>
                </div>
                <div className="col-lg-3">
                    <h6>Project Plan</h6>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <p className='ReadMore'>Read More <img src={Arrow} alt=''/></p>
                </div>

            </div>

            <div className="content2 row col-lg-12 ">
                <div className="desc pb-5">
                    <h6>How We Work</h6>
                    <p>It is a long established fact will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                {renderServices()}
            </div>

            <div className='content3'>
                <h2>Wanna join the afaq?</h2>
                <p>It is a long established fact  will be distracted.</p>
                <button type="submit" className="btn btn-primary rounded-pill">Contact With Us</button>
            </div>
        </div>

    </div>
  )
}

export default OurServiceContent