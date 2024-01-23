import React from 'react'
import './Error.css'
import Home from '../Home/Home'
import { useNavigate } from 'react-router-dom';

const Error = () => {
  let navigate = useNavigate();
  return (
    <div className='Error'>
      <div className='row h-100'>
        
        <div className='container col-4   Banner-Content ' >
          <h1 className=' '>404</h1>
          <h2>We are sorry, but the page you requested was not found</h2>
          <button type="submit" className="btn btn-primary rounded-pill" onClick={()=> navigate('/')}>Back To Home</button>
        </div>

        <div className='OurServiceBanner-image d-flex img-fuid col-lg-7' >
          
        </div>

      </div>
    </div>
  )
}

export default Error