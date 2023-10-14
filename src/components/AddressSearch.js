import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { PlacesAutocomplete, geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      coordinates: null,
    };
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.setState({
          address,
          coordinates: latLng,
        });
      })
      .catch((error) => console.error('Error', error));
  };

  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    return (
      <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={(address) => this.setState({ address })}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Tìm địa chỉ...',
                })}
              />
              <div>
                {loading ? <div>Loading...</div> : null}

                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          center={this.state.coordinates} // Đặt tọa độ trung tâm của bản đồ
        >
          {this.state.coordinates && (
            <Marker
              title={this.state.address}
              name={this.state.address}
              position={this.state.coordinates} // Sử dụng tọa độ tìm thấy
            />
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyARFz6QooEJhlJCaSmNRsGFK7sa5xcMY90',
})(MapContainer);
