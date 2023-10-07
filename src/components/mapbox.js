import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
const TOKEN = 'pk.eyJ1IjoiZ2puZ3gxMjMiLCJhIjoiY2xuY3E0NHpxMDd2YTJpb254ODhyemRhbSJ9.MziHIv1nPHGFYSiefouDKQ';

export default function Mapbox() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 12,
      });
    });
  }, [viewport]);
  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div style={{width: "67.67vw", height: "47.66vw"}}>
          <Map
            mapboxAccessToken={TOKEN}
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v12"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
        </div>
      )}
    </div>
  )
}
