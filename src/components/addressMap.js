import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// const trainIconUrl = "";

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

class AddressMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeMarker: null,
          selectedPlace: null,
          showingInfoWindow: false,
          searchAddress: '',
          searchAddressCoordinates: null,
          
        };
      }

      handleSearchAddressChange = (address) => {
        this.setState({ searchAddress: address });
      };

      handleSearchAddressSelect = async (address) => {
        this.setState({ searchAddress: address });
      
        const results = await geocodeByAddress(address);
        if (results.length > 0) {
          const latLng = await getLatLng(results[0]);
          this.setState({ searchAddressCoordinates: latLng, initialCenter: latLng });
          this.state.map.panTo(latLng);
        }
      };
    
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
            initialCenter= {pointsOfInterest[0].coordinates}
            onReady={(mapProps, map) => {
                this.setState({ map: map });
            }}
            >
            {markers}

            {this.state.searchAddressCoordinates && (
                <Marker
                position={this.state.searchAddressCoordinates}
                title="Searched Address"
                />
                )}

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
            <div className="places-autocomplete-container">
                <PlacesAutocomplete
                    value={this.state.searchAddress}
                    onChange={this.handleSearchAddressChange}
                    onSelect={this.handleSearchAddressSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <input
                        {...getInputProps({className: 'places-autocomplete-input',})}
                        placeholder="Nhập địa chỉ cần tìm"
                        />
                        <div className="pac-container">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                {...getSuggestionItemProps(suggestion, {
                                className: 'pac-item',
                                })}
                            >
                                {suggestion.description}
                            </div>
                            ))}
                        </div>
                    </div>
                    )}
                </PlacesAutocomplete>
            </div>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey : "AIzaSyARFz6QooEJhlJCaSmNRsGFK7sa5xcMY90",
})(AddressMap);
