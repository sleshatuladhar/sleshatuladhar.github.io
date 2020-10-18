/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React from 'react'
import paroolYogaGroup from '../../../assets/img/png/parool-yoga-group.png';

const AboutUs = (props) => {
  return (
    <div className='about-us'>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-3'>
        <h1 className='text-primary'>About Us</h1>
      </div>
      <div className='grey lighten-2 d-flex justify content-between mx-5 px-5 py-4'>
        <img
          src={paroolYogaGroup}
          className='img-fluid cursor-pointer'
          alt='parool-yoga-group'
        />
        <p className='text-justify ml-5'>
          Maitreya Bodhi Home Care and Service has been opened with the vision to provide the best Home Care Service and Clinic facilities to the elderly. After years of dreaming and planning with ideas, Dr. Sampurna Man Tuladhar took the initiative to convert a derelict garage with a tin roof and mudbrick walls to a spacious and geriatic friendly clinic. The main idea behind Maitreya Bodhi Home Care and Clinic was to send elderly parents to the clinic to spend some quality time while their family goes to work. However, we are still encouraging elders to spend their time in the clinic.
            </p>
      </div>
    </div>
  );
}

export default AboutUs;