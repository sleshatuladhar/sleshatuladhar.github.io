/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
}

class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 27.706815, lng: 85.318823 }}
      >
        <Marker position={{ lat: 27.706815, lng: 85.318823 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCKVc67QsKaMKS_vOinjr8k6VEYhXV4kVY'
})(GoogleMap);