/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import { MDBCol, MDBIcon, MDBRow } from 'mdbreact'
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container-fluid footer'>
          <MDBRow className='mr-5 ml-5'>
            <MDBCol md='4'>
              <p className='text-justify mt-3'>This website serves as the official guide to Champions For Nepal Health and as an introduction to this organization. Users are invited to explore the website for information and its business activities.</p>
              <h5>Contact Information</h5>
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
            <MDBCol md='4'></MDBCol>
            <MDBCol md='4'></MDBCol>
          </MDBRow>
        </div>
      </footer>
    );
  }
}

export default Footer;