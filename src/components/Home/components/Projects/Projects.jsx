import React from 'react';
import './Projects.css';
import logo1 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.43 PM (2).jpeg';
import logo2 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.45 PM (1).jpeg';
import logo3 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.44 PM (2).jpeg';

const Projects = () => {
  return (
    <div className='projects'>
      <div className="container">
        <div className='info col-lg-8 pt-5'>
          <h1 className='title pt-5 mb-5'>Projects</h1>
          <p className='description pb-5'>our portfolio is a testament to our commitment to excellence in both advertising and interior design</p>
        </div>
        <div className="row align-items-center">
          <div class="first col-sm-6 col-lg-4">
              <div class="box mb-3 bg-dark rounded" >
                  <img src={logo1} alt="" class="img-fluid rounded" />
              </div>
          </div>
          <div class="middle col-sm-6 col-lg-4 "style={{marginTop: "5rem"}} >
              <div class="box mb-3 bg-dark rounded" >
                  <img src={logo2} alt="" class="img-fluid rounded" />
              </div>
          </div>
          <div class="last col-sm-6 col-lg-4 " style={{marginTop: "10rem"}}>
              <div class="box mb-3 bg-dark rounded" >
                  <img src={logo3} alt="" class="img-fluid rounded" />
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects