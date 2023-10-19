import { useNavigation, useRoute } from '@react-navigation/native';
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions
} from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Map from './Map';
import OutlinedButton from './OutlinedButton';

function LocationPicker() {
  const navigation = useNavigation();
  const route = useRoute();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();

  useEffect(() => {
    const pickedLocationFromMap = route.params?.pickedLocation;

    if (pickedLocationFromMap) {
      setPickedLocation(pickedLocationFromMap);
    }
  }, [route.params?.pickedLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const response = await requestPermission();
      return response.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  }

  function pickOnMapHandler() {
    navigation.navigate('map');
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        <Map selectedLocation={pickedLocation} />
      </View>
      <View style={styles.buttonContainer}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  }
});

export default LocationPicker;
