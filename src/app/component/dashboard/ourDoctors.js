/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React from 'react'
import { MDBBtn, MDBCol } from 'mdbreact';

const OurDoctors = (props) => {
  const { ourDoctors } = props;

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <h1 className='text-primary'>Our Doctors</h1>
      </div>
      <div className='d-flex flex-wrap justify-content-between mx-5 px-5 py-4'>
        {ourDoctors &&
          ourDoctors.map((doctor, i) => (
            <React.Fragment key={i}>
              <MDBCol md='3'>
                <div
                  className='m-1 p-1 d-flex flex-column justify-content-between align-items-center align-self-stretch'
                  style={{ minHeight: '200px' }}
                >
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className='m-1 mb-4'
                  />
                  <span className='text-center font-size-larger font-weight-medium'>{doctor.name}</span>
                  <span className='text-center m-1'>{doctor.speciality}</span>
                </div>
              </MDBCol>
            </React.Fragment>
          ))}
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <MDBBtn size='lg' color='secondary' className='rounded'>View All</MDBBtn>
      </div>
    </div>

  );
}

export default OurDoctors;