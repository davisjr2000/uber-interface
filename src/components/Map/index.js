import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';

export default class Map extends React.Component {

  state = {
    region: null
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude} }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.02,
          }
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccurary: true,
        maximumAge: 1000,
      }
    );
  }

  render(){

    const { region } = this.state;

     return (
      <View style={{flex:1}}>
        <MapView
        style={{ flex: 1}}
        region={region}
        showsUserLocation
        loadingEnabled
        />
      </View>
      );
  }
};
