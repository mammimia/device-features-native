import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Map({
  selectedLocation,
  onPress = () => {},
  mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
}) {
  return (
    <MapView style={styles.map} initialRegion={mapRegion} onPress={onPress}>
      {selectedLocation && (
        <Marker title="Picked Location" coordinate={selectedLocation} />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default Map;