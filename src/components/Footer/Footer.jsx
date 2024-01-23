import React from 'react'
import './Footer.css'
import logo from '../../Images/logo2.png'

const Footer = () => {
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
                  <li>
                    <a className="text-white px-4" href="#!">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-4" href="#!">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-4" href="#!">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-4" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
            </div>

            <div className="col-lg-7 ps-5 ms-5 col-md-6">
              <div className='row'>
                <div className="col-md-4 mb-4">

                <h5 className="text-uppercase ">Product</h5>
                <div className='small-line mb-4'></div>
                <ul className="list-unstyled">
                  <li>Service</li>
                  <li>FAQ</li>
                  <li>Get Quote</li>
                </ul>
              </div>

              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase ">Company</h5>
                <div className='small-line mb-4'></div>

                <ul className="list-unstyled">
                  <li>About</li>
                  <li>News</li>
                  <li>Contacts</li>
                  <li>Service</li>
                  <li>Our team</li>
                  <li>Out approach</li>
                </ul>
              </div>

              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase ">Address</h5>
                <div className='small-line mb-4'></div>

                <p>Saudia arabia, jaddah</p>
                <button type='button' className='btn btn-light rounded-pill'>Contact Us</button>
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



{/* 
  <footer class="bg-primary text-center text-lg-start text-white">
    <div class="container p-4">
      <div class="row my-4">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

          <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style="width: 150px; height: 150px;">
            <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
                 loading="lazy" />
          </div>

          <p class="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

          <ul class="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a class="text-white px-2" href="#!">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a class="text-white px-2" href="#!">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="text-white ps-2" href="#!">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Animals</h5>

          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>When your pet is missing</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Recently found</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>How to adopt?</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Pets for adoption</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Material gifts</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Help with walks</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Volunteer activities</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Animals</h5>

          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>General information</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>About the shelter</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Statistic data</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Job</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Tenders</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Contact</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Contact</h5>

          <ul class="list-unstyled">
            <li>
              <p><i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
            </li>
            <li>
              <p><i class="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
            </li>
            <li>
              <p><i class="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
 */}

    </>
  )
}

export default Footer