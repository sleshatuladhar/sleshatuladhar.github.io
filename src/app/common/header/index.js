import { MDBIcon } from 'mdbreact';
/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      //#region header top bar
      <div>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <span><MDBIcon icon='phone-volume' />+977 9857891552/ 9806544687/ 01-4244071</span>
          <span><MDBIcon icon='map-market-alt' /> Bagbazar, Kathmandu</span>
          <span>nepalchampions@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Header;