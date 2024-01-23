import React from 'react';
import './OurValues.css';
import Innovation from '../../../../Images/Innovation.svg';
import Teamwork from '../../../../Images/Teamwork.svg';
import Excellence from '../../../../Images/Excellence.svg';
import Responsibility from '../../../../Images/Responsibility.svg';


const OurValues = () => {
  return (
    <div className='OurValues'>
        <div className="container">
            <div className='OurValuesData' style={{width: '1206px'}}>
                <div className="Title text-center">Our values</div>
                <div className="description text-center p-5"> The story and values behind our company</div>
            </div>

 
            <div className="pros row col-lg-12 pb-5 justify-content-between">
                <div className="Innovation col-lg-5 ">
                    <img src={Innovation} alt='' />
                    <div className="data">
                        <h6>Innovation</h6>
                        <p>become one of the best advertising agencies in the Middle East and to be a “one-stop shop” for all internal and external advertising</p>
                    </div>
                </div>

                <div className="Teamwork col-lg-5 ">
                    <img src={Teamwork} alt='' />
                    <div className="data">
                        <h6>Team work</h6>
                        <p>become one of the best advertising agencies in the Middle East and to be a “one-stop shop” for all internal and external advertising</p>
                    </div>
                </div>
            

                <div className="Excellence col-lg-5 mt-4">
                    <img src={Excellence} alt='' />
                    <div className="data">
                        <h6>Excellence</h6>
                        <p>become one of the best advertising agencies in the Middle East and to be a “one-stop shop” for all internal and external advertising</p>
                    </div>
                </div>

                <div className="Responsibility col-lg-5 mt-4">
                    <img src={Responsibility} alt='' />
                    <div className="data">
                        <h6>Responsibility</h6>
                        <p>become one of the best advertising agencies in the Middle East and to be a “one-stop shop” for all internal and external advertising</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurValues