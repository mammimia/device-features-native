import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import IconButton from '../components/ui/IconButton';
import Map from '../components/ui/Map';

const mapRegion = {
  latitude: 37.78,
  longitude: -122.43,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

function PickOnMap({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked!',
        'Please pick a location on the map first.',
        [{ text: 'Okay' }]
      );
      return;
    }

    navigation.navigate('add-place', { pickedLocation: selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      )
    });
  });

  function selectLocationHandler(event) {
    const coordinates = {
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude
    };

    setSelectedLocation(coordinates);
  }

  return (
    <Map
      selectedLocation={selectedLocation}
      mapRegion={mapRegion}
      onPress={selectLocationHandler}
    />
  );
}

export default PickOnMap;
