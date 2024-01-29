import React, { useEffect, useState } from 'react'
import './Experiance.css';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

const Experiance = () => {
  const [HomeData, setHomeData] = useState([]);
  async function getHome(){
    let response = await axios.get(``);
    setHomeData(response);
    console.log(response);
  }

  useEffect(()=>{
    // getHome();
  },[]);

  return (
    <div className='experiance'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pt-4">
            <h1 className='title text-light pb-5'>Experiance</h1>
            <h4 className='text-dark fw-bold'>More than 25 years of experience</h4>
            <p className='text-dark'>3000+ our clients are insured around the World</p>
          </div>

          <div className="col-lg-6 pt-5 mt-5 d-flex ps-5 ms-5 justify-content-between text-center">
            <div className="progress-container" style={{ width: 150, height: 150 }}>
              <CircularProgressbarWithChildren
                value={85}
                styles={buildStyles({ pathColor: "#252525", textColor: "#fff" })}
              >
                <p className="percentage fs-4 pt-1 fw-bolder">85%</p>
              </CircularProgressbarWithChildren>
              <p className="description pt-3">Consistency</p>
            </div>

            <div className="progress-container" style={{ width: 150, height: 150 }}>
              <CircularProgressbarWithChildren
                value={95}
                styles={buildStyles({ pathColor: "#252525", textColor: "#fff" })}
              >
                <p className="percentage fs-4 pt-1 fw-bolder">95%</p>
              </CircularProgressbarWithChildren>
              <p className="description pt-3">Improvement</p>
            </div>

            <div className="progress-container" style={{ width: 150, height: 150 }}>
              <CircularProgressbarWithChildren
                value={90}
                styles={buildStyles({ pathColor: "#252525", textColor: "#fff" })}
              >
                <p className="percentage fs-4 pt-1 fw-bolder ">90%</p>
              </CircularProgressbarWithChildren>
              <p className="description pt-3">Branching</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experiance