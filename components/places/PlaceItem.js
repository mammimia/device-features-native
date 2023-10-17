import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onSelect={onSelect}>
      <View>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default PlaceItem;
