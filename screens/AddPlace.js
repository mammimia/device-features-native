import { StyleSheet } from 'react-native';
import PlaceForm from '../components/places/PlaceForm';

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate('all-places', { place });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});

export default AddPlace;
