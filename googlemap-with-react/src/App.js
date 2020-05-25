import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
  width: '50%',
  height: '50%'
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Map google={this.props.google} zoom={14} initialCenter={{ lat: 6.927079, lng: 79.861244 }}
        // containerStyle={containerStyle}
        style={style}
        centerAroundCurrentLocation={false}
        >

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>

          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBZMsaoXAt7JqaEV9suMQR_wVCt3QLCMoc")
})(App)
