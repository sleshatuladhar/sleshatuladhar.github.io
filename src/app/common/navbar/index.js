/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React, { Component } from 'react'
import logo from '../../../assets/img/png/logo.png';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from 'mdbreact';

class HeaderNavbar extends Component {
  render() {
    return (
      <MDBNavbar
        className='p-0 shadow-sm'
        light
        color='white'
        expand='md'
        sticky='top'
      >
        <MDBNavbarBrand className='mr-0 p-0 ml-5' href='/'>
          <img
            src={logo}
            className='img-fluid cursor-pointer'
            alt='champions-of-nepal-health-logo'
          />
        </MDBNavbarBrand>
        <MDBNavbarNav right className='mr-5 p-2'>
          <MDBNavItem className='my-2 mx-3 py-2 px-3'>
            <MDBNavLink to="#" className='nav-item-text'>Our Services</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className='my-2 mx-3 py-2 px-3'>
            <MDBNavLink to="#" className='nav-item-text'>Our Doctors</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className='my-2 mx-3 py-2 px-3'>
            <MDBNavLink to="#" className='nav-item-text'>News & Events</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className='py-2 pl-2 pr-0 my-2 ml-2 mr-0'>
            <MDBNavLink to="#" className='nav-item-text'>Contact Us</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    )
  }
}

export default HeaderNavbar;