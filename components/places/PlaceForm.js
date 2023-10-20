import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/colors';
import Button from '../ui/Button';
import ImagePicker from '../ui/ImagePicker';
import LocationPicker from '../ui/LocationPicker';
import { Place } from '../../models/Place';

function PlaceForm({ onCreatePlace }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  function savePlaceHandler() {
    const place = new Place(title, image, location);
    onCreatePlace(place);
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
      </View>
      <ImagePicker image={image} onImageChange={setImage} />
      <LocationPicker location={location} onLocationChange={setLocation} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginVertical: 16
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  }
});

export default PlaceForm;
