import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OutlinedButton from '../components/ui/OutlinedButton';
import { Colors } from '../constants/colors';
import { fetchPlaceDetails } from '../database/Database';

function PlaceDetails({ route, navigation }) {
  const [placeDetails, setPlaceDetails] = useState(null);
  function showOnMapHandler() {}

  const selectedPlaceId = route.params?.placeId;

  useEffect(() => {
    async function loadPlaceDetails() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setPlaceDetails(place);
      navigation.setOptions({ title: place.title });
    }

    if (selectedPlaceId != null) {
      loadPlaceDetails();
    }
  }, [selectedPlaceId]);

  if (placeDetails == null) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: placeDetails.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{placeDetails.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%'
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressContainer: {
    padding: 20
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    color: Colors.primary500
  }
});

export default PlaceDetails;
