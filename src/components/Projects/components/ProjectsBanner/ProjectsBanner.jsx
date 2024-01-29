import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProjectsBanner = () => {
  const [ProjectsData, setProjectsData] = useState([]);
  async function getProjects(){
    let response = await axios.get(``);
    setProjectsData(response);
    console.log(response);
  }

  useEffect(()=>{
    // getProjects();
  },[]);
  
  return (
    <div className='OurServiceBanner'>
      <div className='row h-100'>
        
        <div className='container col-4   Banner-Content ' >
          <h1 className=' '>Our Projects</h1>

        </div>

        <div className='OurServiceBanner-image d-flex img-fuid col-lg-7' >
          
        </div>

      </div>
    </div>
  )
}

export default ProjectsBanner