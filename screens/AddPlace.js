import { StyleSheet } from 'react-native';
import PlaceForm from '../components/places/PlaceForm';
import { insertPlace } from '../database/Database';

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate('all-places');
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});

export default AddPlace;
