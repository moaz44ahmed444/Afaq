import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css';
import logo from '../../Images/logo2.png'
import axios from 'axios';

const Navbar = () => {

  const [NavbarData, setNavbarData] = useState([]);
  let navigate = useNavigate();

  async function getNavbar() {
    try {
      let { data } = await axios.get(`https://pijet.app/afaq/api/getMenuItems`);
      setNavbarData(data.data);
    } catch (error) {
      console.error('Error fetching Navbar data:', error);
    }
  }
  

  useEffect(()=>{
    getNavbar();
  },[]);
  
  const handleNavbarItemClick = (link) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Navigate to the specified link
    navigate(link);
  };


  const NavbarItems = NavbarData.map((NavItem) => {
    if (NavItem.status === 0) return null;
    return (
        <li key={NavItem.id}>
          <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
           to={ NavItem.link_en === "Home" ? "/" : NavItem.link_en}
           onClick={() => handleNavbarItemClick(NavItem.link_en === "Home" ? "/" : NavItem.link_en)}
          >
           {NavItem.name_en}
          </NavLink>
        </li>
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
          <ul className="navbar-nav  mt-2 mt-lg-0">
            {NavbarItems}
          </ul>
          </div>
        </div>
      </nav>
    </>

    
  )
}

export default Navbar