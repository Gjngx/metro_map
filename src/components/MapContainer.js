import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import trainService from '../services/trainService';
// const trainIconUrl = "";

const ListTrain =() => {
  const [train, setTrain] = useState([])
  useEffect (() => {
    const getAllTrain = () =>
    {
      trainService.getAllTrain().then((response) => {
          setTrain(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

  })
}



const pointsOfInterest = [
    {
    id: 1,
    coordinates: { lat: 21.0146109, lng: 105.8194616 },
    name: 'Ga thái hà',
    Address:'8 Hoàng Cầu, Chợ Dừa, Đống Đa',
    },
    {
        id: 2,
        coordinates: { lat: 20.9991439, lng: 105.7938017 },
        name: 'Ga la thành',
        Address:'8 Hoàng Cầu, Chợ Dừa, Đống Đa',
        },
];



class MapContainer extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          activeMarker: null,
          selectedPlace: null,
          showingInfoWindow: false,
        };
      }
    
      onMarkerClick = (props, marker, e) => {
        const selectedPlace = pointsOfInterest.find(
          (point) => point.name === props.title
        );
      
        if (selectedPlace) {
          this.setState({
            activeMarker: marker,
            selectedPlace: selectedPlace,
            showingInfoWindow: true,
          });
        } else {
          console.error(`Place not found for title: ${props.title}`);
        }
      };
      
      onClose = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            activeMarker: null,
            showingInfoWindow: false,
          });
        }
      };
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    // const customIcon = {
    //     url: trainIconUrl,
    //     size: new this.props.google.maps.Size(40, 40),
    //     origin: new this.props.google.maps.Point(0, 0), 
    //     anchor: new this.props.google.maps.Point(20, 20),
    //   };

    const markers = pointsOfInterest.map((point) => (
        <Marker
          key={point.id}
          position={point.coordinates}
          title={point.name}
          onClick={this.onMarkerClick}
        />
      ));    

    return (
      <div >
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={pointsOfInterest[0].coordinates}
          >
          {markers}
          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
              >
              {this.state.selectedPlace && (
                  <div>
                      <h3>{this.state.selectedPlace.name}</h3>
                      <p>{this.state.selectedPlace.Address}</p>
                  </div>
              )}
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey : "AIzaSyARFz6QooEJhlJCaSmNRsGFK7sa5xcMY90",
})(MapContainer);
