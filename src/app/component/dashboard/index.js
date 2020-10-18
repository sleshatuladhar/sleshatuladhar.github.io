/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import { MDBBtn, MDBCol } from 'mdbreact';
import React, { Component } from 'react'
import paroolYogaGroup from '../../../assets/img/png/parool-yoga-group.png';
import commonConstants from '../../constant/commonConstants';

class Dashboard extends Component {
  state = {
    rangeOfHealthcarePrograms: commonConstants.RANGE_OF_HEALTHCARE_SERVICES
  };

  render() {
    return (
      <div className='container-fluid'>
        {/* About Us */}
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
        {/* End About Us */}

        {/* Range of our Healthcare Programs */}
        <div>
          <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h1 className='text-primary'>Range of our Healthcare Programs</h1>
            <MDBBtn size='lg' color='secondary' className='btn-gray-rounded'>FIND THE ONE THAT BEST MEETS YOUR NEEDS</MDBBtn>
          </div>
          <div className='d-flex flex-wrap justify-content-between mx-5 px-5 py-4'>
            {this.state.rangeOfHealthcarePrograms &&
              this.state.rangeOfHealthcarePrograms.map((service, i) => (
                <React.Fragment key={i}>
                  <MDBCol md='3'>
                    <div
                      className='grey m-2 p-3 d-flex flex-column justify-content-between align-items-center align-self-stretch'
                      style={{ 'min-height': '200px' }}
                    >
                      <img
                        src={service.img}
                        alt={service.name}
                        className='m-2'
                      />
                      <span className='text-white font-size-larger m-2'>{service.name}</span>
                    </div>
                  </MDBCol>
                </React.Fragment>
              ))}
          </div>
        </div>
        {/* End Range of our Healthcare Programs */}
      </div>
    );
  }
}

export default Dashboard;