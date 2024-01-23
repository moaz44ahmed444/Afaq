import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <>
        <Navbar />

            <Outlet></Outlet>

        <Footer />

    </>
  )
}

export default Layout