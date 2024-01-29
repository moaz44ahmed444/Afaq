import React, { useEffect, useState } from 'react'
import './ContactBanner.css';
import axios from 'axios';

const ContactBanner = () => {
  const [ContacteData, setContacteData] = useState([]);
  async function getContacte(){
    let response = await axios.get(``);
    setContacteData(response);
    console.log(response);
  }

  useEffect(()=>{
    // getContacte();
  },[]);
  
  return (
    <div className='ContactBanner'>
        <div className='row h-100'>
        
        <div className='container col-4   Banner-Content ' >
          <h1 className=' '>Contact Us</h1>

        </div>

        <div className='ContactBanner-image d-flex img-fuid col-lg-7' >
          
        </div>

      </div>
    </div>
  )
}

export default ContactBanner