import React from 'react';
// ES6
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZGlsei1tYXBib3giLCJhIjoiY2thbmVkYW9zMDJ1bzJ1cW4wOGMzaTBmbCJ9.fFVVCkpjc6-R1i_8jPmB3g'
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
        >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer>
        </Map>
      </div>
    );
  }
}

export default App
