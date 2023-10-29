import React from 'react'
import Mapbox from './mapbox'
// import MapContainer from './MapContainer'
import AddressMap from './addressMap'
import MapContainer from './map'
export default function BodyRight() {
  return (
    <div className='bodyRight'>
        <div className='map-container'>
            {/* <Mapbox/> */}
            <MapContainer/>
            {/* <AddressMap/> */}
        </div>
    </div>
  )
}
