import React, { useEffect, useState } from 'react';
import './OurServices.css';
import icon1 from '../../../../Images/Service Icon.svg';
import icon2 from '../../../../Images/Service Icon (1).svg';
import icon3 from '../../../../Images/Service Icon (2).svg';
import axios from 'axios';


const OurServices = () => {
  const [HomeData, setHomeData] = useState([]);
  async function getHome(){
    let response = await axios.get(``);
    setHomeData(response);
    console.log(response);
  }

  useEffect(()=>{
    // getHome();
  },[])
  return (
    <div className='ourServices'>
      <div className="container">
        <div className="info pt-5">
          <h1 className="title pt-5 mb-5">Our Services</h1>
          <h3 className='text-white-50'>We provide the best solutions for your dream home</h3>
        </div>

        <div className="row pt-5 col-lg-11 ">
          <div className="col-lg-4">
            <div className="card p-4 rounded-0" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"grey"}}>
              <img src={icon1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h1 className="card-title">Architectural & Interior design</h1>
                <p className="card-text">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card p-4 rounded-0" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"grey"}}>
              <img src={icon2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">Building Renovation</h1>
                <p className="card-text">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card p-4 rounded-0" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"grey"}}>
              <img src={icon3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h1 className="card-title">Construciton Management</h1>
                <p className="card-text">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default OurServices