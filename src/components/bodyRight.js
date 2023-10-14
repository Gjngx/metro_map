import React from 'react'
import Mapbox from './mapbox'
import MapContainer from './MapContainer'
import AddressSearch from './AddressSearch'
export default function BodyRight() {
  return (
    <div className='bodyRight'>
        <div className='map-container'>
            {/* <Mapbox/> */}
            <AddressSearch/>
            {/* <MapContainer/> */}
        </div>
    </div>
  )
}
