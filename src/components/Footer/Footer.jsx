import React, { useEffect, useState } from 'react'
import './Footer.css'
import logo from '../../Images/logo2.png'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {

  const [settingsData, setSettingsData] = useState([]);
  const [CompanyData, setCompanyData] = useState([]);
  let navigate = useNavigate();

  async function getSettings() {
    try {
      let response = await axios.get(`https://pijet.app/afaq/api/getSettings`);
      setSettingsData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching services data:', error);
    }
  }
  
  async function getCompany() {
    try {
      let { data } = await axios.get(`https://pijet.app/afaq/api/getMenuItems`);
      setCompanyData(data.data);
    } catch (error) {
      console.error('Error fetching Company data:', error);
    }
  }

  useEffect(() => {
    getSettings();
    getCompany();
  }, []);

  const handleContactUsClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    
    // Navigate to the 'Contact_Us' route
    navigate('Contact_Us');
  };

  const renderSocialIcons = () => {
    if (settingsData.length === 0) {
      return null;
    }

    const socialIcons = [
      { name: 'facebook', url: settingsData[0].facebook },
      { name: 'twitter', url: settingsData[0].twitter },
      { name: 'linkedin', url: settingsData[0].linkedin },
      { name: 'instagram', url: settingsData[0].instgram },
    ];

    return socialIcons.map((icon) => (
      <li key={icon.name}>
        <a className="text-white px-4" href={icon.url} target="_blank" rel="noopener noreferrer">
          <i className={`fab fa-${icon.name}`}></i>
        </a>
      </li>
    ));
  };

  const renderCompanyList = () => {
    if (CompanyData.length === 0) {
      return null;
    }
  
    const handleCompanyItemClick = (link) => {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
  
      // Navigate to the specified link
      navigate(link);
    };
  
    return CompanyData.map((item) => (
      <li key={item.id}>
        <button
          className="nav-link"
          onClick={() => handleCompanyItemClick(item.link_en === "Home" ? "/" : item.link_en)}
        >
          {item.name_en}
        </button>
      </li>
    ));
  };
  

  return (
    <>
      <footer className="footer text-center text-lg-start">
        <div className="background"></div>
        <div className='container '>
          <div className='row my-4'>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>

              <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                <img src={logo} alt="Afaq Logo" height="70" loading="lazy" />
              </div>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  {renderSocialIcons()}
                </ul>
            </div>

            <div className="col-lg-8 ps-5 ms-5 col-md-6">
              <div className='row'>
                <div className="col-md-4 mb-4">

                <h5 className="text-uppercase ">Product</h5>
                <div className='small-line mb-4'></div>
                <ul className="list-unstyled">
                  <li>mobile: {settingsData[0]? settingsData[0].mobile : ''}</li>
                  <li>mobile 2: {settingsData[0]? settingsData[0].mobile2 : ''}</li>
                  <li>Whatsapp: {settingsData[0]? settingsData[0].whatsapp : ''}</li>
                </ul>
              </div>

              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase ">Company</h5>
                <div className='small-line mb-4'></div>

                <ul className="list-unstyled">
                  {renderCompanyList()}
                </ul>
              </div>

              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase ">Address</h5>
                <div className='small-line mb-4'></div>

                <p>Saudia arabia, jaddah</p>
                <button type='button' onClick={handleContactUsClick} className='btn btn-light rounded-pill'>Contact Us</button>
              </div>

              </div>
            </div>
          </div>
        </div>
        <div className='big-line justify-content-center text-center'></div>
        <div className="text-center p-3" >
          © 2023 Your Company. All rights reserved | Terms of Service | Privacy Policy
        </div> 

      </footer>

    </>
  )
}

export default Footer