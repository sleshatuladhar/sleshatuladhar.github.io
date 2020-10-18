/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React, { Component } from 'react'
import { MDBIcon } from 'mdbreact';
import HeaderNavbar from '../navbar';

class Header extends Component {
  render() {
    return (
      //#region header
      <header>
        {/* header top bar  */}
        <div className='container-fluid header-top-bar'>
          <div className='d-flex justify-content-between align-items-center mr-5 ml-5'>
            <span>
              <MDBIcon icon='phone-volume' className='mr-1' />
              +977
              <a href='tel:+977-9857891552' className='text-white'> 9857891552/</a>
              <a href='tel:+977-9806544687' className='text-white'> 9806544687/</a>
              <a href='tel:+977-1-4244071' className='text-white'> 01-4244071</a>
            </span>
            <span><MDBIcon icon='map-marker-alt' className='mr-1' /> Bagbazar, Kathmandu</span>
            <span><MDBIcon icon='envelope' className='mr-1' />
              <a href='mailto:nepalchampions@gmail.com' className='text-white'> nepalchampions@gmail.com</a>
            </span>
          </div>
        </div>
        {/* end header top bar */}

        {/* header navigation */}
        <HeaderNavbar />
        {/* end header navigation */}

        {/* banner */}
        <div className='container-fluid banner'></div>
        {/* end banner */}
      </header>
    );
  }
}

export default Header;