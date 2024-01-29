import React, { useEffect, useState } from 'react'
import './ContactForm.css';
import Call from '../../../Images/Call Icon.svg';
import Domain from '../../../Images/Domain.svg';
import Mail from '../../../Images/Mail.svg'
import Map from '../../../Images/Map.png';
import axios from 'axios';

const ContactForm = () => {
    const [ContactData, setContactData] = useState([]);
    async function getContact(){
      let response = await axios.get(``);
      setContactData(response);
      console.log(response);
    }
  
    useEffect(()=>{
    //   getContact();
    },[]);
    
  return (
    <div className='ContactForm'>
        <div className="container">
            <div className="row">

                <div className="text-center">
                    <h2>We love meeting new people and helping them.</h2>
                </div>

                <div className="contactSection col-lg-4 pt-5 mt-2">
                    <div className="details ">
                        <div  className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
                            <img src={Mail} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                            <div className="text-white ms-3">
                            <p className='h6 text-white-50'>info@yourdomain.com</p>
                            </div>
                        </div>

                        <div  className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
                            <img src={Call} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                            <div className="text-white ms-3">
                            <p className='h6 text-white-50'>+1 (378) 400-1234</p>
                            </div>
                        </div>

                        <div  className='statistics col-2 d-flex align-items-center ' style={{width: "auto"}}>
                            <img src={Domain} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                            <div className="text-white ms-3">
                            <p className='h6 text-white-50'>www.yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="formDetails col-lg-6 pt-5 mt-2 ms-5 ps-5">
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control  " id="fullName" placeholder='Name'/>
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control " id="email" placeholder='Email' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control " id="company" placeholder='Subject'/>
                            </div>
                            <div className="col-md-6">
                                <input type="tel" className="form-control " id="phone" placeholder='Phone' />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control " id="message" rows="3" placeholder='Hello Iam Intrested in..'></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary rounded-4 gap-1">Send Now <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path d="M1.85889 8.43517L15.5821 8.29832M10.4771 1.91113L17 8.43412L10.3457 15.0885" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                        </button>
                    </form>
                </div>

                <div className="MapPhoto">
                    <img src={Map} alt='' className=' rounded-5' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactForm