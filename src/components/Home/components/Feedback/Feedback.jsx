import React, { useEffect, useState } from 'react';
import './Feedback.css';
import icon1 from '../../../../Images/Icon.svg';
import icon2 from '../../../../Images/Icon (1).svg';
import icon3 from '../../../../Images/Group 16.svg';
import profilePhoto1 from '../../../../Images/Photo.png';
import profilePhoto2 from '../../../../Images/Photo (1).png';
import profilePhoto3 from '../../../../Images/Photo (2).png';
import axios from 'axios';


const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aboutData, setaboutData] = useState([])
  async function getFeedback(){
    try {
      let response = await axios.get(`https://pijet.app/afaq/api/getTestimonials`);
      setFeedbackData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  }

  async function getAbout(){
    try {
      let response = await axios.get(`https://pijet.app/afaq/api/getAbout`);
      setaboutData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  }

  useEffect(()=>{
    getFeedback();
    // getAbout();
  },[]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbackData.length) % feedbackData.length);
  };

  const visibleCards = feedbackData.slice(currentIndex, currentIndex + 3);


  const cardItems = visibleCards.map((cardItem) => {
    if (!cardItem || cardItem.status === 0) return null;
    return(
      <div className="col-md-4 mb-4" key={cardItem.id}>
          <div className={`card p-4 card-transition`} style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"none" }}>
            <div className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
              <img src={`https://pijet.app/afaq/uploads/testimonials/source/${cardItem.img}`} className="profile-photo" alt="..." />
              <div className="text-white ms-3">
                <h6>{cardItem.name}</h6>
                <p className='job-role ps-2 pe-2'>{cardItem.position}</p>
              </div>
            </div>
              <div className="">
                <div className="card-body text-white ">
                  <p >{cardItem.text}</p>
                </div>
              </div>
            </div>
          </div>
    )
  })
  return (
    <div className='feedback'>
      <div className="title text-center pt-5 mt-5">Clients feedback</div>
      <div className="row text-center align-items-center justify-content-center pt-5">

        <div className='statistics col-2 d-flex align-items-center'>
          <img src={icon1} className="" alt="..." />
          <div className="text-white ms-3">
            <h1>1542+</h1>
            <p className='fw-bold'>Satisfied Clients</p>
          </div>
          <div className="vertical-line justify-content-between"></div>
        </div>

        <div className='statistics col-2 d-flex align-items-center'>
          <img src={icon2} className="" alt="..." />
          <div className="text-white ms-3">
            <h1>182</h1>
            <p className='fw-bold'>Expert Team</p>
          </div>
          <div className="vertical-line justify-content-between"></div>
        </div>

        <div className='statistics col-2 d-flex align-items-center'>
          <img src={icon3} className="" alt="..." />
          <div className="text-white ms-3">
            <h1>28+</h1>
            <p className='fw-bold'>Awards Winning</p>
          </div>
        </div>

      </div>
      <div className="container mt-5">
        <div className='row'>
          {cardItems}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="prev btn mx-2 " onClick={handlePrevious}>
            Previous
          </button>
          <button className="next btn mx-2" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};


export default Feedback;

          // {/* Card 1 */}
          // <div className="col-md-4 mb-4">
          // <div className="card p-4" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"none" }}>
          //   <div className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
          //     <img src={profilePhoto1} className="profile-photo" alt="..." />
          //     <div className="text-white ms-3">
          //       <h6>Kathleen Smith</h6>
          //       <p className='job-role'>Web Designer</p>
          //     </div>
          //   </div>
          //     <div className="">
          //       <div className="card-body text-white ">
          //         <p >Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque habitant morbil.</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          // {/* Card 2 */}
          // <div className="col-md-4 mb-4">
          //   <div className="card p-4" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"none" }}>
          //     <div className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
          //       <img src={profilePhoto2} className="profile-photo" alt="..." />
          //       <div className="text-white ms-3">
          //       <h6>John Martin</h6>
          //       <p className='job-role ps-2 pe-2'>Web Designer</p>
          //     </div>
          //     </div>
          //     <div className="">
          //       <div className="card-body text-white ">
          //         <p >Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque aservices, and become a multinational firm, offering solutions Worldwide.</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          // {/* Card 3 */}
          // <div className="col-md-4 mb-4">
          //   <div className="card p-4" style={{backgroundColor: "#252525", color: "aliceblue", borderColor:"none" }}>
          //     <div className='statistics col-2 d-flex align-items-center' style={{width: "auto"}}>
          //       <img src={profilePhoto3} className="profile-photo" alt="..." />
          //       <div className="text-white ms-3">
          //         <h6>Natalia Duke</h6>
          //         <p className='job-role ps-2 pe-2'>Web Designer</p>
          //       </div>
          //     </div>
          //     <div className="">
          //       <div className="card-body text-white ">
          //         <p >Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque habitant morbi.</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>