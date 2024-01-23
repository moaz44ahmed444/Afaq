import React from 'react';
import './Process.css';
import Call from '../../../../Images/Call Icon.svg';
import Clock from '../../../../Images/Clock Icon.svg';
import Location from '../../../../Images/Location Icon.svg';


const Process = () => {
  return (
    <div className='process'>
      <div className="container">
      <div className="title pt-5">Process</div>
        <div className="row">
          <div className="contactSection col-lg-4 pt-5 mt-2">
            <h1 className='text-white'>Contact Us. It’s Easy.</h1>
            <p className='text-white-50'>Afaq to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
            <div className="details pt-5 ">
              <div  className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
                <img src={Call} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                <div className="text-white ms-3">
                  <p className='h6 text-white-50'>Call Today</p>
                  <p className='text-white'>+966 54 680 8112</p>
                </div>
              </div>

              <div  className='statistics col-2 d-flex align-items-center pt-5' style={{width: "auto"}}>
                <img src={Clock} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                <div className="text-white ms-3">
                  <p className='h6 text-white-50'>SundayTo Friday</p>
                  <p className='text-white'>9AM - 5PM</p>
                </div>
              </div>

              <div  className='statistics col-2 d-flex align-items-center pt-5' style={{width: "auto"}}>
                <img src={Location} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                <div className="text-white ms-3">
                  <p className='h6 text-white-50'>Saudia arabia </p>
                  <p className='text-white'>jaddah</p>
                </div>
              </div>
            </div>
          </div>

          <div className="formDetails col-lg-6 pt-5 mt-2 ms-5 ps-5">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label text-white">Full Name</label>
                <input type="text" className="form-control rounded-pill " id="fullName" placeholder='john david'/>
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label text-white">Email</label>
                <input type="email" className="form-control rounded-pill" id="email" placeholder='consult@mail.com' />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label text-white">Phone</label>
                <input type="tel" className="form-control rounded-pill" id="phone" placeholder='+008 654 231' />
              </div>
              <div className="col-md-6">
                <label htmlFor="company" className="form-label text-white">Company (Optional)</label>
                <input type="text" className="form-control rounded-pill" id="company" placeholder='yourcompany.com'/>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-white">Message</label>
              <textarea className="form-control rounded-4" id="message" rows="3" placeholder='Briefly tell us about your project and your current goals. How can we help you?'></textarea>
            </div>
            <button type="submit" className="btn btn-primary rounded-pill">Send Message</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process;
