/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import { MDBCol, MDBIcon, MDBRow } from 'mdbreact'
import React, { Component } from 'react'
import GoogleMap from '../google-map'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container-fluid footer'>
          <MDBRow className='mr-5 ml-5 mt-4'>
            {/* Contact Information */}
            <MDBCol md='4'>
              <p className='text-justify'>This website serves as the official guide to Champions For Nepal Health and as an introduction to this organization. Users are invited to explore the website for information and its business activities.</p>
              <h4>Contact Information</h4>
              <p className='mb-0'>
                <MDBIcon icon='phone-volume' className='mr-1' />
                +977
                <a href='tel:+977-9857891552' className='text-white'> 9857891552/</a>
                <a href='tel:+977-9806544687' className='text-white'> 9806544687/</a>
                <a href='tel:+977-1-4244071' className='text-white'> 01-4244071</a>
              </p>
              <p className='ml-3'>
                Sunday - Friday: 7 a.m. - 7 p.m.
              </p>
              <p>
                <MDBIcon icon='map-marker-alt' className='mr-1' /> Bagbazar, Kathmandu, Nepal
              </p>
            </MDBCol>
            {/* End Contact Information */}

            {/* Company Information / Useful Links */}
            <MDBCol md='4' className='d-flex justify-content-center'>
              <ul>
                <li>
                  <h4>Company Information</h4>
                </li>
                <li>
                  <a href='#'>About Champions for Nepal Health</a>
                </li>
                <li>
                  <a href='#'>Terms and Conditions</a>
                </li>
                <li>
                  <a href='#'>FAQ's</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </MDBCol>
            {/* End */}

            {/* Google Map */}
            <MDBCol md='4'>
              <GoogleMap />
            </MDBCol>
            {/* End */}
          </MDBRow>
        </div>
      </footer>
    );
  }
}

export default Footer;