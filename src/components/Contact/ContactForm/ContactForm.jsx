import React, { useEffect, useState } from 'react'
import './ContactForm.css';
import Call from '../../../Images/Call Icon.svg';
import Domain from '../../../Images/Domain.svg';
import Mail from '../../../Images/Mail.svg'
import Map from '../../../Images/Map.png';
import axios from 'axios';

const ContactForm = () => {
    const [ContactData, setContactData] = useState([]);
    const [formData, setformData] = useState({
        name: '',
        phone: '',
        message: '',
    });
    
    
      const handleChange = (e) => {
        setformData({...formData,[e.target.name]: e.target.value})
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(`https://pijet.app/afaq/api/setMessage`,formData);
          if (response.status === 200) {
            // Handle successful response
            console.log('Form submitted successfully');
          } else {
            // Handle error response
            console.error('Form submission failed');
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Error during form submission:', error);
        }
      }
    
    async function getContact(){
      try {
        let { data } = await axios.get(`https://pijet.app/afaq/api/getSettings`);
        setContactData(data.data);
      } catch (error) {
        console.error('Error fetching Navbar data:', error);
      }
    }
  
    useEffect(()=>{
       getContact();
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
                            <p className='h6 text-white-50'>{ContactData.length > 0 ? ContactData[0].email : ''}</p>
                            </div>
                        </div>

                        <div  className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
                            <img src={Call} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                            <div className="text-white ms-3">
                            <p className='h6 text-white-50'>{ContactData.length > 0 ? ContactData[0].mobile : ''}</p>
                            </div>
                        </div>

                        <div  className='statistics col-2 d-flex align-items-center ' style={{width: "auto"}}>
                            <img src={Domain} className="profile-photo " alt="..." style={{width: "52.332px"}}/>
                            <div className="text-white ms-3">
                            <p className='h6 text-white-50'>{ContactData.length > 0 ? ContactData[0].email : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="formDetails col-6 pt-5 mt-2 ms-5 ps-5">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <input 
                                    type="text" 
                                    className="form-control " 
                                    id="name" 
                                    placeholder='Name'
                                    name='name' 
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <div className="col-md-6">
                                <input type="email" className="form-control " id="email" placeholder='Email' />
                            </div> */}
                        </div>
                        <div className="row mb-3">
                            {/* <div className="col-md-6">
                                <input type="text" className="form-control " id="company" placeholder='Subject'/>
                            </div> */}
                            <div className="col-lg-12">
                                <input 
                                    type="tel" 
                                    className="form-control " 
                                    id="phone" 
                                    placeholder='Phone' 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3 col-lg-12">
                            <textarea 
                                className="form-control " 
                                id="message" 
                                rows="3" 
                                placeholder='Hello Iam Intrested in..'
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary rounded-4 gap-1">Send Now <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path d="M1.85889 8.43517L15.5821 8.29832M10.4771 1.91113L17 8.43412L10.3457 15.0885" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                        </svg>
                        </button>
                    </form>
                </div>

                <div className="MapPhoto">
                    <iframe 
                        title="Location Map" 
                        src={ContactData.length > 0 ? ContactData[0].map_url : ''} 
                        width="100%" 
                        height="450" 
                        frameBorder="0" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactForm