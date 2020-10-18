/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React, { Component } from 'react';
import rangeOfHealthcareProgramsConstants from '../../constant/range-of-healthcare-programs-constants';
import AboutUs from './aboutUs';
import OurDoctors from './ourDoctors';
import RangeOfHealthcarePrograms from './rangeOfHealthcarePrograms';
import ourDoctorsConstants from '../../constant/our-doctors-constants';

class Dashboard extends Component {
  state = {
    rangeOfHealthcarePrograms: rangeOfHealthcareProgramsConstants,
    ourDoctors: ourDoctorsConstants
  };

  render() {
    return (
      <div className='container-fluid'>
        {/* About Us */}
        <AboutUs />
        {/* End About Us */}

        {/* Range of our Healthcare Programs */}
        <RangeOfHealthcarePrograms
          rangeOfHealthcarePrograms={this.state.rangeOfHealthcarePrograms}
        />
        {/* End Range of our Healthcare Programs */}

        {/* Our doctors */}
        <OurDoctors
          ourDoctors={this.state.ourDoctors}
        />
        {/* End Our doctors */}
      </div>
    );
  }
}

export default Dashboard;