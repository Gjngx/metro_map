import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import trainService from '../services/trainService';

const MapContainer = (props) => {
  const [train, setTrain] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await trainService.getAllTrain();
        setTrain(response.data);
        console.log('Data from API:', response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onMarkerClick = (props, marker, e) => {
    const selectedTrain = train.find(item => item.id === props.id);

    if (selectedTrain) {
      setActiveMarker(marker);
      setSelectedPlace(selectedTrain);
      setShowingInfoWindow(true);
    } else {
      console.error(`Train not found for title: ${props.id}`);
    }
  };

  

  const onClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const markers = train.map((trainItem) => {
    const position = {
      lat: trainItem.lat,
      lng: trainItem.lng
    };

    return (
      <Marker
        key={trainItem.id}
        id ={trainItem.id}
        position={position}
        title={trainItem.tenGa}
        onClick={onMarkerClick}
      />
    );
  });

  return (
    <div>
      <Map
        google={props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={train.length > 0 ? train[0].coordinates : { lat: 21.0146109, lng: 105.8194616 }}
      >
        {markers}
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          {selectedPlace && (
            <div>
              {console.log(selectedPlace)}
              <h3>{selectedPlace.tenGa}</h3>
              <p>{selectedPlace.diaChi}</p>
            </div>
          )}
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyARFz6QooEJhlJCaSmNRsGFK7sa5xcMY90",
})(MapContainer);
