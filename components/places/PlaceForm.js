import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/colors';
import ImagePicker from '../ui/ImagePicker';

function PlaceForm() {
  const [title, setTitle] = useState('');

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
      <ImagePicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24
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
