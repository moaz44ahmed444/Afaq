import React, { useEffect, useState } from 'react';
import './Projects.css';
import logo1 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.43 PM (2).jpeg';
import logo2 from '../../../../Images/notDecoration/WhatsApp Image 2024-01-25 at 9.00.02 AM (2).jpeg';
import logo3 from '../../../../Images/WhatsApp Image 2024-01-16 at 4.42.44 PM (2).jpeg';
import axios from 'axios';

const Projects = () => {

  const [ProjectsData, setProjectsData] = useState([]);

    async function getProjects() {
        try {
          let response = await axios.get(`https://pijet.app/afaq/api/getProjects`);
          setProjectsData(response);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching projects data:', error);
        }
      }
    
  
      useEffect(()=>{
        getProjects();
     },[]);
   
     
  return (
    <div className='projects'>
      <div className="container">
        <div className='info col-lg-8 pt-5'>
          <h1 className='title pt-5 mb-5'>{ProjectsData.data ? ProjectsData.data.message : ''}</h1>
          <p className='description '>{ProjectsData.data ? ProjectsData.data.data[0].text_en : ''}</p>
        </div>
        <div className="row align-items-center">
          <div className="first col-sm-6 col-lg-4">
              <div className="box mb-3 bg-dark rounded" >
                  <img src={`https://pijet.app/afaq/uploads/projects/source/${ProjectsData.data ? ProjectsData.data.data[0].image : ''}`} alt={ProjectsData.data ? ProjectsData.data.data[0].img_alt : ''} className="img-fluid rounded" />
              </div>
          </div>
          <div className="middle col-sm-6 col-lg-4 "style={{marginTop: "5rem", }} >
              <div className=" box mb-3 bg-dark rounded" >
                  <img src={`https://pijet.app/afaq/uploads/projects/source/${ProjectsData.data ? ProjectsData.data.data[1].image : ''}`} alt={ProjectsData.data ? ProjectsData.data.data[1].img_alt : ''} className="img-fluid rounded" />
              </div>
          </div>
          <div className="last col-sm-6 col-lg-4 " style={{marginTop: "10rem"}}>
              <div className="box mb-3 bg-dark rounded" >
                  <img src={`https://pijet.app/afaq/uploads/projects/source/${ProjectsData.data ? ProjectsData.data.data[2].image : ''}`} alt={ProjectsData.data ? ProjectsData.data.data[2].img_alt : ''} className="img-fluid rounded" />
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects