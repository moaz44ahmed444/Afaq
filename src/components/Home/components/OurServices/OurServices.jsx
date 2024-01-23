import React from 'react';
import './OurServices.css';
import icon1 from '../../../../Images/Service Icon.svg';
import icon2 from '../../../../Images/Service Icon (1).svg';
import icon3 from '../../../../Images/Service Icon (2).svg';


const OurServices = () => {
  return (
    <div className='ourServices'>
      <div className="container">
        <div className="info pt-5">
          <h1 className="title pt-5 mb-5">Our Services</h1>
          <h3 className='text-white-50'>We provide the best solutions for your dream home</h3>
        </div>

        <div class="row pt-5 col-lg-11 ">
          <div class="col-lg-4">
            <div class="card p-4 rounded-0" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"grey"}}>
              <img src={icon1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h1 class="card-title">Architectural & Interior design</h1>
                <p class="card-text">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
          <div class="card p-4 rounded-0" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"grey"}}>
              <img src={icon2} className="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-title">Building Renovation</h1>
                <p class="card-text">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
          <div class="card p-4 rounded-0" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"grey"}}>
              <img src={icon3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h1 class="card-title">Construciton Management</h1>
                <p class="card-text">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default OurServices