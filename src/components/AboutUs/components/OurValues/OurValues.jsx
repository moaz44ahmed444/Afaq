import React, { useEffect, useState } from 'react';
import './OurValues.css';
import Innovation from '../../../../Images/Innovation.svg';
import Teamwork from '../../../../Images/Teamwork.svg';
import Excellence from '../../../../Images/Excellence.svg';
import Responsibility from '../../../../Images/Responsibility.svg';
import axios from 'axios';

const OurValues = () => {
  const [AboutUsData, setAboutUsData] = useState([]);
  async function getAboutUs() {
    try {
      let { data } = await axios.get(`https://pijet.app/afaq/api/getAboutStrucs`);
      setAboutUsData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching Navbar data:', error);
    }
  }

  useEffect(() => {
    getAboutUs();
  }, []);

  const valuesData = AboutUsData.find(item => item.id === 5);

  // Split the text into sentences
  const sentences = valuesData ? valuesData.text.split('.') : [];

  return (
    <div className='OurValues'>
      <div className="container">
        <div className='OurValuesData' style={{ width: '1206px' }}>
          <div className="Title text-center">{valuesData ? valuesData.title : ''}</div>
          <div className="description text-center p-5"> The story and values behind our company</div>
        </div>

        <div className="pros row col-lg-12 pb-5 justify-content-between">
          <div className="Innovation col-lg-5 ">
            <img src={Innovation} alt='' />
            <div className="data">
              <h6>Innovation</h6>
              <p>{sentences[0]}</p>
            </div>
          </div>

          <div className="Teamwork col-lg-5 ">
            <img src={Teamwork} alt='' />
            <div className="data">
              <h6>Team work</h6>
              <p>{sentences[1]}</p>
            </div>
          </div>

          <div className="Excellence col-lg-5 mt-4">
            <img src={Excellence} alt='' />
            <div className="data">
              <h6>Excellence</h6>
              <p>{sentences[2]}</p>
            </div>
          </div>

          <div className="Responsibility col-lg-5 mt-4">
            <img src={Responsibility} alt='' />
            <div className="data">
              <h6>Responsibility</h6>
              <p>{sentences[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
