import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../../Images/logo2.png'
import axios from 'axios';

const Navbar = () => {

  const [NavbarData, setNavbarData] = useState([]);
  
  async function getNavbar() {
    try {
      let { data } = await axios.get(`https://pijet.app/afaq/api/getMenuItems`);
      setNavbarData(data.data);
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error fetching Navbar data:', error);
    }
  }
  

  useEffect(()=>{
    getNavbar();
  },[]);

  // async function getNavbar() {
  //   try {
  //     const response = await fetch('https://pijet.app/afaq/api/getMenuItems');
      
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  //     setNavbarData(data.data);
  //     console.log('API Response:', data);
  //   } catch (error) {
  //     console.error('Error fetching Navbar data:', error.message);
  //   }
  // }
  
  

  const NavbarItems = NavbarData.map((NavItem) => {
    return (
      <ul className="navbar-nav  mt-2 mt-lg-0">
        <li key={NavItem.id}>
          <Link className="nav-link " to={ NavItem.link_en}>{NavItem.name_en}</Link>
        </li>
      </ul>
    )
  })

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark ">

        <div className="container d-flex">
          <Link className="navbar-brand " href="#">
            <div className='nav-logo'>
              <img src={logo} alt="Afaq Logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
            {NavbarItems}
            {/* <ul className="navbar-nav  mt-2 mt-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link " to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="AboutUs">About Us</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="Projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Help">Help</Link>
              </li>
              

            </ul> */}
          </div>
        </div>
      </nav>
    </>

    
  )
}

export default Navbar