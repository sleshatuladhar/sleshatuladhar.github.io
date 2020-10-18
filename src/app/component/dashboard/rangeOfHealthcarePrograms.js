/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React from 'react'
import { MDBBtn, MDBCol } from 'mdbreact';

const RangeOfHealthcarePrograms = (props) => {
  const { rangeOfHealthcarePrograms } = props;

  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1 className='text-primary'>Range of our Healthcare Programs</h1>
        <MDBBtn size='lg' color='secondary' className='btn-gray-rounded'>FIND THE ONE THAT BEST MEETS YOUR NEEDS</MDBBtn>
      </div>
      <div className='d-flex flex-wrap justify-content-between mx-5 px-5 py-4'>
        {rangeOfHealthcarePrograms &&
          rangeOfHealthcarePrograms.map((service, i) => (
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
                  <span className='text-center text-white font-size-larger m-2'>{service.name}</span>
                </div>
              </MDBCol>
            </React.Fragment>
          ))}
      </div>
    </div>

  );
}

export default RangeOfHealthcarePrograms;