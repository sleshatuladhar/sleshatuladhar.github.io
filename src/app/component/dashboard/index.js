/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import { MDBBtn, MDBCol } from 'mdbreact';
import React, { Component } from 'react'
import commonConstants from '../../constant/commonConstants';
import AboutUs from './aboutUs';

class Dashboard extends Component {
  state = {
    rangeOfHealthcarePrograms: commonConstants.RANGE_OF_HEALTHCARE_SERVICES
  };

  render() {
    return (
      <div className='container-fluid'>
        {/* About Us */}
        <AboutUs />
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
                      style={{ minHeight: '200px' }}
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