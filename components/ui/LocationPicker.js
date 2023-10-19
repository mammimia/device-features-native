import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus
} from 'expo-location';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';
import OutlinedButton from './OutlinedButton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

function LocationPicker() {
  const navigation = useNavigation();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();

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
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
  }

  function pickOnMapHandler() {
    navigation.navigate('map');
  }

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  }
});

export default LocationPicker;
