import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
function Contacts() {
  const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  
  const center = {
    lat: 40.712776,
    lng: -74.005974
  };
  
  return (
    <div className='m-0'>
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY_HERE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
    </div>
  );
}
 

export default Contacts